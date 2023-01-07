package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"

	// this line is used by starport scaffolding # 1
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgMintBySwap{}, "kaiju/MsgMintBySwap", nil)
	cdc.RegisterConcrete(&MsgBurnBySwap{}, "kaiju/MsgBurnBySwap", nil)
	cdc.RegisterConcrete(&MsgBuyBacking{}, "kaiju/MsgBuyBacking", nil)
	cdc.RegisterConcrete(&MsgSellBacking{}, "kaiju/MsgSellBacking", nil)
	cdc.RegisterConcrete(&MsgMintByCollateral{}, "kaiju/MsgMintByCollateral", nil)
	cdc.RegisterConcrete(&MsgBurnByCollateral{}, "kaiju/MsgBurnByCollateral", nil)
	cdc.RegisterConcrete(&MsgDepositCollateral{}, "kaiju/MsgDepositCollateral", nil)
	cdc.RegisterConcrete(&MsgRedeemCollateral{}, "kaiju/MsgRedeemCollateral", nil)
	cdc.RegisterConcrete(&MsgLiquidateCollateral{}, "kaiju/MsgLiquidateCollateral", nil)
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations(
		(*govtypes.Content)(nil),
		&RegisterBackingProposal{},
		&RegisterCollateralProposal{},
		&SetBackingRiskParamsProposal{},
		&SetCollateralRiskParamsProposal{},
		&BatchSetBackingRiskParamsProposal{},
		&BatchSetCollateralRiskParamsProposal{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(Amino)
)

func init() {
	RegisterCodec(Amino)
}
