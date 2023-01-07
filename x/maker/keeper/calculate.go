package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	kaiju "github.com/petri-labs/kaiju/types"
	"github.com/petri-labs/kaiju/x/maker/types"
)

func (k Keeper) calculateMintBySwapIn(
	ctx sdk.Context,
	mintOut sdk.Coin,
	backingDenom string,
	fullBacking bool,
) (
	backingIn sdk.Coin,
	kaijuIn sdk.Coin,
	mintFee sdk.Coin,
	err error,
) {
	backingIn = sdk.NewCoin(backingDenom, sdk.ZeroInt())
	kaijuIn = sdk.NewCoin(kaiju.AttoKaijuDenom, sdk.ZeroInt())
	mintFee = sdk.NewCoin(kaiju.MicroFUSDDenom, sdk.ZeroInt())

	err = k.checkMintPriceLowerBound(ctx)
	if err != nil {
		return
	}

	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in usd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	mintFee = computeFee(mintOut, backingParams.MintFee)
	mintTotal := mintOut.Add(mintFee)
	mintTotalInUSD := mintTotal.Amount.ToDec().Mul(kaiju.MicroFUSDTarget)

	_, poolBacking, err := k.getBacking(ctx, backingDenom)
	if err != nil {
		return
	}
	poolBacking.MerMinted = poolBacking.MerMinted.Add(mintTotal)
	if backingParams.MaxMerMint != nil && poolBacking.MerMinted.Amount.GT(*backingParams.MaxMerMint) {
		err = sdkerrors.Wrapf(types.ErrMerCeiling, "black over ceiling")
		return
	}

	backingRatio := k.GetBackingRatio(ctx)
	if backingRatio.GTE(sdk.OneDec()) || fullBacking {
		// full/over backing, or user selects full backing
		backingIn.Amount = mintTotalInUSD.QuoRoundUp(backingPrice).RoundInt()
	} else if backingRatio.IsZero() {
		// full algorithmic
		kaijuIn.Amount = mintTotalInUSD.QuoRoundUp(kaijuPrice).RoundInt()
	} else {
		// fractional
		backingIn.Amount = mintTotalInUSD.Mul(backingRatio).QuoRoundUp(backingPrice).RoundInt()
		kaijuIn.Amount = mintTotalInUSD.Mul(sdk.OneDec().Sub(backingRatio)).QuoRoundUp(kaijuPrice).RoundInt()
	}

	poolBacking.Backing = poolBacking.Backing.Add(backingIn)
	if backingParams.MaxBacking != nil && poolBacking.Backing.Amount.GT(*backingParams.MaxBacking) {
		err = sdkerrors.Wrapf(types.ErrBackingCeiling, "backing over ceiling")
		return
	}

	return
}

func (k Keeper) calculateMintBySwapOut(
	ctx sdk.Context,
	backingInMax sdk.Coin,
	kaijuInMax sdk.Coin,
	fullBacking bool,
) (
	backingIn sdk.Coin,
	kaijuIn sdk.Coin,
	mintOut sdk.Coin,
	mintFee sdk.Coin,
	err error,
) {
	backingDenom := backingInMax.Denom

	err = k.checkMintPriceLowerBound(ctx)
	if err != nil {
		return
	}

	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in uusd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	backingRatio := k.GetBackingRatio(ctx)

	backingInMaxInUSD := backingPrice.MulInt(backingInMax.Amount)
	kaijuInMaxInUSD := kaijuPrice.MulInt(kaijuInMax.Amount)

	mintTotalInUSD := sdk.ZeroDec()
	backingIn = sdk.NewCoin(backingDenom, sdk.ZeroInt())
	kaijuIn = sdk.NewCoin(kaiju.AttoKaijuDenom, sdk.ZeroInt())

	if backingRatio.GTE(sdk.OneDec()) || fullBacking {
		// full/over backing, or user selects full backing
		mintTotalInUSD = backingInMaxInUSD
		backingIn.Amount = backingInMax.Amount
	} else if backingRatio.IsZero() {
		// full algorithmic
		mintTotalInUSD = kaijuInMaxInUSD
		kaijuIn.Amount = kaijuInMax.Amount
	} else {
		// fractional
		max1 := backingInMaxInUSD.Quo(backingRatio)
		max2 := kaijuInMaxInUSD.Quo(sdk.OneDec().Sub(backingRatio))
		if backingInMax.IsPositive() && (kaijuInMax.IsZero() || max1.LTE(max2)) {
			mintTotalInUSD = max1
			backingIn.Amount = backingInMax.Amount
			kaijuIn.Amount = mintTotalInUSD.Mul(sdk.OneDec().Sub(backingRatio)).QuoRoundUp(kaijuPrice).RoundInt()
			if kaijuInMax.IsPositive() && kaijuInMax.IsLT(kaijuIn) {
				kaijuIn.Amount = kaijuInMax.Amount
			}
		} else {
			mintTotalInUSD = max2
			kaijuIn.Amount = kaijuInMax.Amount
			backingIn.Amount = mintTotalInUSD.Mul(backingRatio).QuoRoundUp(backingPrice).RoundInt()
			if backingInMax.IsPositive() && backingInMax.IsLT(backingIn) {
				backingIn.Amount = backingInMax.Amount
			}
		}
	}

	mintTotal := sdk.NewCoin(kaiju.MicroFUSDDenom, mintTotalInUSD.Quo(kaiju.MicroFUSDTarget).TruncateInt())

	_, poolBacking, err := k.getBacking(ctx, backingDenom)
	if err != nil {
		return
	}

	poolBacking.MerMinted = poolBacking.MerMinted.AddAmount(mintTotal.Amount)
	if backingParams.MaxMerMint != nil && poolBacking.MerMinted.Amount.GT(*backingParams.MaxMerMint) {
		err = sdkerrors.Wrap(types.ErrMerCeiling, "")
		return
	}

	poolBacking.Backing = poolBacking.Backing.Add(backingIn)
	if backingParams.MaxBacking != nil && poolBacking.Backing.Amount.GT(*backingParams.MaxBacking) {
		err = sdkerrors.Wrap(types.ErrBackingCeiling, "")
		return
	}

	mintFee = computeFee(mintTotal, backingParams.MintFee)
	mintOut = mintTotal.Sub(mintFee)
	return
}

func (k Keeper) calculateBurnBySwapIn(
	ctx sdk.Context,
	backingOutMax sdk.Coin,
	kaijuOutMax sdk.Coin,
) (
	burnIn sdk.Coin,
	backingOut sdk.Coin,
	kaijuOut sdk.Coin,
	burnFee sdk.Coin,
	err error,
) {
	backingDenom := backingOutMax.Denom

	burnIn = sdk.NewCoin(kaiju.MicroFUSDDenom, sdk.ZeroInt())
	backingOut = sdk.NewCoin(backingOutMax.Denom, sdk.ZeroInt())
	kaijuOut = sdk.NewCoin(kaiju.AttoKaijuDenom, sdk.ZeroInt())
	burnFee = sdk.NewCoin(kaiju.MicroFUSDDenom, sdk.ZeroInt())

	err = k.checkBurnPriceUpperBound(ctx)
	if err != nil {
		return
	}

	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in usd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	backingOutMaxInUSD := backingPrice.MulInt(backingOutMax.Amount)
	kaijuOutMaxInUSD := kaijuPrice.MulInt(kaijuOutMax.Amount)

	burnActualInUSD := sdk.ZeroDec()
	backingRatio := k.GetBackingRatio(ctx)
	if backingRatio.GTE(sdk.OneDec()) {
		// full/over backing
		burnActualInUSD = backingOutMaxInUSD
		backingOut.Amount = backingOutMax.Amount
	} else if backingRatio.IsZero() {
		// full algorithmic
		burnActualInUSD = kaijuOutMaxInUSD
		kaijuOut.Amount = kaijuOutMax.Amount
	} else {
		// fractional
		burnActualWithBackingInUSD := backingOutMaxInUSD.Quo(backingRatio)
		burnActualWithKaijuInUSD := kaijuOutMaxInUSD.Quo(sdk.OneDec().Sub(backingRatio))
		if kaijuOutMax.IsZero() || (backingOutMax.IsPositive() && burnActualWithBackingInUSD.LT(burnActualWithKaijuInUSD)) {
			burnActualInUSD = burnActualWithBackingInUSD
			backingOut.Amount = backingOutMax.Amount
			kaijuOut.Amount = burnActualInUSD.Mul(sdk.OneDec().Sub(backingRatio)).QuoRoundUp(kaijuPrice).RoundInt()
		} else {
			burnActualInUSD = burnActualWithKaijuInUSD
			kaijuOut.Amount = kaijuOutMax.Amount
			backingOut.Amount = burnActualInUSD.Mul(backingRatio).QuoRoundUp(backingPrice).RoundInt()
		}
	}

	moduleOwnedBacking := k.bankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(types.ModuleName), backingDenom)
	if moduleOwnedBacking.IsLT(backingOut) {
		err = sdkerrors.Wrapf(types.ErrBackingCoinInsufficient, "backing coin out(%s) < balance(%s)", backingOut, moduleOwnedBacking)
		return
	}

	burnFeeRate := sdk.ZeroDec()
	if backingParams.BurnFee != nil {
		burnFeeRate = *backingParams.BurnFee
	}

	burnInValue := burnActualInUSD.Quo(kaiju.MicroFUSDTarget).Quo(sdk.OneDec().Sub(burnFeeRate))
	burnFeeValue := burnInValue.Mul(burnFeeRate)
	burnIn = sdk.NewCoin(kaiju.MicroFUSDDenom, burnInValue.RoundInt())
	burnFee = sdk.NewCoin(kaiju.MicroFUSDDenom, burnFeeValue.RoundInt())
	return
}

func (k Keeper) calculateBurnBySwapOut(
	ctx sdk.Context,
	burnIn sdk.Coin,
	backingDenom string,
) (
	backingOut sdk.Coin,
	kaijuOut sdk.Coin,
	burnFee sdk.Coin,
	err error,
) {
	err = k.checkBurnPriceUpperBound(ctx)
	if err != nil {
		return
	}

	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in usd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	backingRatio := k.GetBackingRatio(ctx)

	burnFee = computeFee(burnIn, backingParams.BurnFee)
	burnActual := burnIn.Sub(burnFee)
	burnActualInUSD := burnActual.Amount.ToDec().Mul(kaiju.MicroFUSDTarget)

	backingOut = sdk.NewCoin(backingDenom, sdk.ZeroInt())
	kaijuOut = sdk.NewCoin(kaiju.AttoKaijuDenom, sdk.ZeroInt())

	if backingRatio.GTE(sdk.OneDec()) {
		// full/over backing
		backingOut.Amount = burnActualInUSD.QuoTruncate(backingPrice).TruncateInt()
	} else if backingRatio.IsZero() {
		// full algorithmic
		kaijuOut.Amount = burnActualInUSD.QuoTruncate(kaijuPrice).TruncateInt()
	} else {
		// fractional
		backingOut.Amount = burnActualInUSD.Mul(backingRatio).QuoTruncate(backingPrice).TruncateInt()
		kaijuOut.Amount = burnActualInUSD.Mul(sdk.OneDec().Sub(backingRatio)).QuoTruncate(kaijuPrice).TruncateInt()
	}

	_, poolBacking, err := k.getBacking(ctx, backingDenom)
	if err != nil {
		return
	}
	moduleOwnedBacking := k.bankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(types.ModuleName), backingDenom)

	poolBackingBalance := sdk.NewCoin(backingDenom, sdk.MinInt(poolBacking.Backing.Amount, moduleOwnedBacking.Amount))
	if poolBackingBalance.IsLT(backingOut) {
		err = sdkerrors.Wrapf(types.ErrBackingCoinInsufficient, "backing coin out(%s) > balance(%s)", backingOut, poolBackingBalance)
		return
	}

	return
}

func (k Keeper) calculateBuyBackingIn(
	ctx sdk.Context,
	backingOut sdk.Coin,
) (
	kaijuIn sdk.Coin,
	buybackFee sdk.Coin,
	err error,
) {
	backingDenom := backingOut.Denom

	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in usd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	excessBackingValue, err := k.getExcessBackingValue(ctx)
	if err != nil {
		return
	}

	backingOutTotal := sdk.NewCoin(backingDenom, backingOut.Amount.ToDec().Quo(sdk.OneDec().Sub(*backingParams.BuybackFee)).TruncateInt())
	kaijuInValue := backingOutTotal.Amount.ToDec().Mul(backingPrice)

	if kaijuInValue.GT(excessBackingValue.ToDec()) {
		err = sdkerrors.Wrap(types.ErrBackingCoinInsufficient, "")
		return
	}

	_, poolBacking, err := k.getBacking(ctx, backingDenom)
	if err != nil {
		return
	}
	moduleOwnedBacking := k.bankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(types.ModuleName), backingDenom)

	poolBackingBalance := sdk.NewCoin(backingDenom, sdk.MinInt(poolBacking.Backing.Amount, moduleOwnedBacking.Amount))
	if poolBackingBalance.IsLT(backingOutTotal) {
		err = sdkerrors.Wrapf(types.ErrBackingCoinInsufficient, "backing coin out(%s) > balance(%s)", backingOutTotal, poolBackingBalance)
		return
	}

	kaijuIn = sdk.NewCoin(kaiju.AttoKaijuDenom, kaijuInValue.Quo(kaijuPrice).RoundInt())
	buybackFee = sdk.NewCoin(backingDenom, backingOutTotal.Amount.ToDec().Mul(*backingParams.BuybackFee).RoundInt())
	return
}

func (k Keeper) calculateBuyBackingOut(
	ctx sdk.Context,
	kaijuIn sdk.Coin,
	backingDenom string,
) (
	backingOut sdk.Coin,
	buybackFee sdk.Coin,
	err error,
) {
	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in usd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	excessBackingValue, err := k.getExcessBackingValue(ctx)
	if err != nil {
		return
	}

	kaijuInValue := kaijuIn.Amount.ToDec().Mul(kaijuPrice)
	if kaijuInValue.GT(excessBackingValue.ToDec()) {
		err = sdkerrors.Wrap(types.ErrBackingCoinInsufficient, "")
		return
	}

	backingOutTotal := sdk.NewCoin(backingDenom, kaijuInValue.Quo(backingPrice).TruncateInt())

	_, poolBacking, err := k.getBacking(ctx, backingDenom)
	if err != nil {
		return
	}
	moduleOwnedBacking := k.bankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(types.ModuleName), backingDenom)

	poolBackingBalance := sdk.NewCoin(backingDenom, sdk.MinInt(poolBacking.Backing.Amount, moduleOwnedBacking.Amount))
	if poolBackingBalance.IsLT(backingOutTotal) {
		err = sdkerrors.Wrapf(types.ErrBackingCoinInsufficient, "backing coin out(%s) > balance(%s)", backingOutTotal, poolBackingBalance)
		return
	}

	buybackFee = computeFee(backingOutTotal, backingParams.BuybackFee)
	backingOut = backingOutTotal.Sub(buybackFee)
	return
}

func (k Keeper) calculateSellBackingIn(
	ctx sdk.Context,
	kaijuOut sdk.Coin,
	backingDenom string,
) (
	backingIn sdk.Coin,
	rebackFee sdk.Coin,
	err error,
) {
	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in usd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	_, poolBacking, err := k.getBacking(ctx, backingDenom)
	if err != nil {
		return
	}

	excessBackingValue, err := k.getExcessBackingValue(ctx)
	if err != nil {
		return
	}
	missingBackingValue := excessBackingValue.Neg()
	availableKaijuMint := missingBackingValue.ToDec().Quo(kaijuPrice)

	bonusRatio := k.RebackBonus(ctx)

	kaijuMint := kaijuOut.Amount.ToDec().Quo(sdk.OneDec().Add(bonusRatio).Sub(*backingParams.RebackFee))

	backingIn = sdk.NewCoin(backingDenom, kaijuMint.Mul(kaijuPrice).Quo(backingPrice).RoundInt())
	rebackFee = sdk.NewCoin(kaiju.AttoKaijuDenom, kaijuMint.Mul(*backingParams.RebackFee).RoundInt())

	poolBacking.Backing = poolBacking.Backing.Add(backingIn)
	if backingParams.MaxBacking != nil && poolBacking.Backing.Amount.GT(*backingParams.MaxBacking) {
		err = sdkerrors.Wrap(types.ErrBackingCeiling, "")
		return
	}
	if kaijuMint.GT(availableKaijuMint) {
		err = sdkerrors.Wrap(types.ErrKaijuCoinInsufficient, "")
		return
	}

	return
}

func (k Keeper) calculateSellBackingOut(
	ctx sdk.Context,
	backingIn sdk.Coin,
) (
	kaijuOut sdk.Coin,
	rebackFee sdk.Coin,
	err error,
) {
	backingDenom := backingIn.Denom

	backingParams, err := k.getAvailableBackingParams(ctx, backingDenom)
	if err != nil {
		return
	}

	// get prices in usd
	backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, backingDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	_, poolBacking, err := k.getBacking(ctx, backingDenom)
	if err != nil {
		return
	}

	poolBacking.Backing = poolBacking.Backing.Add(backingIn)
	if backingParams.MaxBacking != nil && poolBacking.Backing.Amount.GT(*backingParams.MaxBacking) {
		err = sdkerrors.Wrap(types.ErrBackingCeiling, "")
		return
	}

	excessBackingValue, err := k.getExcessBackingValue(ctx)
	if err != nil {
		return
	}
	missingBackingValue := excessBackingValue.Neg()
	availableKaijuMint := missingBackingValue.ToDec().Quo(kaijuPrice)

	bonusRatio := k.RebackBonus(ctx)
	kaijuMint := sdk.NewCoin(kaiju.AttoKaijuDenom, backingIn.Amount.ToDec().Mul(backingPrice).Quo(kaijuPrice).TruncateInt())
	bonus := computeFee(kaijuMint, &bonusRatio)
	rebackFee = computeFee(kaijuMint, backingParams.RebackFee)

	if kaijuMint.Amount.ToDec().GT(availableKaijuMint) {
		err = sdkerrors.Wrap(types.ErrKaijuCoinInsufficient, "")
		return
	}

	kaijuOut = kaijuMint.Add(bonus).Sub(rebackFee)
	return
}

func (k Keeper) calculateMintByCollateral(
	ctx sdk.Context,
	account sdk.AccAddress,
	collateralDenom string,
	mintOut sdk.Coin,
) (
	mintFee sdk.Coin,
	totalColl types.TotalCollateral,
	poolColl types.PoolCollateral,
	accColl types.AccountCollateral,
	err error,
) {
	collateralParams, err := k.getAvailableCollateralParams(ctx, collateralDenom)
	if err != nil {
		return
	}

	// get prices in usd
	collateralPrice, err := k.oracleKeeper.GetExchangeRate(ctx, collateralDenom)
	if err != nil {
		return
	}
	kaijuPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.AttoKaijuDenom)
	if err != nil {
		return
	}

	totalColl, poolColl, accColl, err = k.getCollateral(ctx, account, collateralDenom)
	if err != nil {
		return
	}

	// settle interest fee
	settleInterestFee(ctx, &accColl, &poolColl, &totalColl, *collateralParams.InterestFee)

	// compute mint total
	mintFee = computeFee(mintOut, collateralParams.MintFee)
	mintTotal := mintOut.Add(mintFee)

	// update black debt
	accColl.MerDebt = accColl.MerDebt.Add(mintTotal)
	poolColl.MerDebt = poolColl.MerDebt.Add(mintTotal)
	totalColl.MerDebt = totalColl.MerDebt.Add(mintTotal)

	if collateralParams.MaxMerMint != nil && poolColl.MerDebt.Amount.GT(*collateralParams.MaxMerMint) {
		err = sdkerrors.Wrapf(types.ErrMerCeiling, "")
		return
	}

	collateralValue := accColl.Collateral.Amount.ToDec().Mul(collateralPrice)
	kaijuCollateralizedValue := accColl.KaijuCollateralized.Amount.ToDec().Mul(kaijuPrice)
	if !collateralValue.IsPositive() {
		err = sdkerrors.Wrapf(types.ErrAccountInsufficientCollateral, "")
		return
	}

	actualCatalyticRatio := sdk.MinDec(kaijuCollateralizedValue.Quo(collateralValue), *collateralParams.CatalyticKaijuRatio)

	// actualCatalyticRatio / catalyticRatio = (availableLTV - basicLTV) / (maxLTV - basicLTV)
	availableLTV := *collateralParams.BasicLoanToValue
	if collateralParams.CatalyticKaijuRatio.IsPositive() {
		availableLTV = availableLTV.Add(actualCatalyticRatio.Mul(collateralParams.LoanToValue.Sub(*collateralParams.BasicLoanToValue)).Quo(*collateralParams.CatalyticKaijuRatio))
	}
	availableDebtMax := collateralValue.Mul(availableLTV).Quo(kaiju.MicroFUSDTarget).TruncateInt()

	if availableDebtMax.LT(accColl.MerDebt.Amount) {
		err = sdkerrors.Wrapf(types.ErrAccountInsufficientCollateral, "")
		return
	}

	return
}

func computeFee(coin sdk.Coin, rate *sdk.Dec) sdk.Coin {
	amt := sdk.ZeroInt()
	if rate != nil {
		amt = coin.Amount.ToDec().Mul(*rate).RoundInt()
	}
	return sdk.NewCoin(coin.Denom, amt)
}

func (k Keeper) checkMintPriceLowerBound(ctx sdk.Context) error {
	merPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.MicroFUSDDenom)
	if err != nil {
		return err
	}
	// market price must be >= target price + mint bias
	mintPriceLowerBound := kaiju.MicroFUSDTarget.Mul(sdk.OneDec().Add(k.MintPriceBias(ctx)))
	if merPrice.LT(mintPriceLowerBound) {
		return sdkerrors.Wrapf(types.ErrMerPriceTooLow, "%s price too low: %s", kaiju.MicroFUSDDenom, merPrice)
	}
	return nil
}

func (k Keeper) checkBurnPriceUpperBound(ctx sdk.Context) error {
	merPrice, err := k.oracleKeeper.GetExchangeRate(ctx, kaiju.MicroFUSDDenom)
	if err != nil {
		return err
	}
	// market price must be <= target price - burn bias
	burnPriceUpperBound := kaiju.MicroFUSDTarget.Mul(sdk.OneDec().Sub(k.BurnPriceBias(ctx)))
	if merPrice.GT(burnPriceUpperBound) {
		return sdkerrors.Wrapf(types.ErrMerPriceTooHigh, "%s price too high: %s", kaiju.MicroFUSDDenom, merPrice)
	}
	return nil
}

func (k Keeper) getAvailableBackingParams(ctx sdk.Context, backingDenom string) (backingParams types.BackingRiskParams, err error) {
	backingParams, found := k.GetBackingRiskParams(ctx, backingDenom)
	if !found {
		err = sdkerrors.Wrapf(types.ErrBackingCoinNotFound, "backing coin denomination not found: %s", backingDenom)
		return
	}
	if !backingParams.Enabled {
		err = sdkerrors.Wrapf(types.ErrBackingCoinDisabled, "backing coin disabled: %s", backingDenom)
		return
	}
	return
}

func (k Keeper) getAvailableCollateralParams(ctx sdk.Context, collateralDenom string) (collateralParams types.CollateralRiskParams, err error) {
	collateralParams, found := k.GetCollateralRiskParams(ctx, collateralDenom)
	if !found {
		err = sdkerrors.Wrapf(types.ErrCollateralCoinNotFound, "collateral coin denomination not found: %s", collateralDenom)
		return
	}
	if !collateralParams.Enabled {
		err = sdkerrors.Wrapf(types.ErrCollateralCoinDisabled, "collateral coin disabled: %s", collateralDenom)
		return
	}
	return
}

func (k Keeper) getExcessBackingValue(ctx sdk.Context) (excessBackingValue sdk.Int, err error) {
	totalBacking, found := k.GetTotalBacking(ctx)
	if !found {
		err = sdkerrors.Wrapf(types.ErrBackingCoinNotFound, "total backing not found")
		return
	}

	backingRatio := k.GetBackingRatio(ctx)
	requiredBackingValue := totalBacking.MerMinted.Amount.ToDec().Mul(backingRatio).Ceil().TruncateInt()
	if requiredBackingValue.IsNegative() {
		requiredBackingValue = sdk.ZeroInt()
	}

	totalBackingValue, err := k.totalBackingInUSD(ctx)
	if err != nil {
		return
	}

	// may be negative
	excessBackingValue = totalBackingValue.Sub(requiredBackingValue)
	return
}

func (k Keeper) totalBackingInUSD(ctx sdk.Context) (sdk.Int, error) {
	totalBackingValue := sdk.ZeroDec()
	for _, pool := range k.GetAllPoolBacking(ctx) {
		// get price in usd
		backingPrice, err := k.oracleKeeper.GetExchangeRate(ctx, pool.Backing.Denom)
		if err != nil {
			return sdk.Int{}, err
		}
		totalBackingValue = totalBackingValue.Add(pool.Backing.Amount.ToDec().Mul(backingPrice))
	}
	return totalBackingValue.TruncateInt(), nil
}
