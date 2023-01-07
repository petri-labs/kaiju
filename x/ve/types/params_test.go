package types

import (
	"testing"

	kaiju "github.com/petri-labs/kaiju/types"
	"github.com/stretchr/testify/require"
)

func TestDefaultParams(t *testing.T) {
	params := DefaultParams()
	require.Equal(t, kaiju.BaseDenom, params.LockDenom)
}
