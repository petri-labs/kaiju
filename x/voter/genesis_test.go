package voter_test

import (
	"testing"

	keepertest "github.com/petri-labs/kaiju/testutil/keeper"
	"github.com/petri-labs/kaiju/testutil/nullify"
	"github.com/petri-labs/kaiju/x/voter"
	"github.com/petri-labs/kaiju/x/voter/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.VoterKeeper(t)
	voter.InitGenesis(ctx, *k, genesisState)
	got := voter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
