package keeper_test

import (
	"testing"

	testkeeper "github.com/petri-labs/kaiju/testutil/keeper"
	"github.com/petri-labs/kaiju/x/erc20/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.Erc20Keeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
