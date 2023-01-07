package types

import (
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	kaiju "github.com/petri-labs/kaiju/types"
)

// DefaultGenesis gets the raw genesis raw message for testing
func DefaultGenesis() *stakingtypes.GenesisState {
	params := stakingtypes.DefaultParams()
	params.BondDenom = kaiju.BaseDenom
	return &stakingtypes.GenesisState{
		Params: params,
	}
}
