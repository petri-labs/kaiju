package vesting

import (
	"time"

	"github.com/cosmos/cosmos-sdk/telemetry"
	sdk "github.com/cosmos/cosmos-sdk/types"
	kaiju "github.com/petri-labs/kaiju/types"
	"github.com/petri-labs/kaiju/x/vesting/keeper"
	"github.com/petri-labs/kaiju/x/vesting/types"
)

// EndBlocker is called at the end of every block
func EndBlocker(ctx sdk.Context, k keeper.Keeper) {
	defer telemetry.ModuleMeasureSince(types.ModuleName, time.Now(), telemetry.MetricKeyEndBlocker)

	if kaiju.IsPeriodLastBlock(ctx, types.ClaimVestedPeriod) {
		k.ClaimVested(ctx)
	}
}
