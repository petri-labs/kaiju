package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/petri-labs/kaiju/x/ve/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) (params types.Params) {
	k.paramstore.GetParamSet(ctx, &params)
	return params
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramstore.SetParamSet(ctx, &params)
}

func (k Keeper) LockDenom(ctx sdk.Context) (res string) {
	k.paramstore.Get(ctx, types.KeyLockDenom, &res)
	return
}
