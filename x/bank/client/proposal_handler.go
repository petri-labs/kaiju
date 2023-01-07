package client

import (
	govclient "github.com/cosmos/cosmos-sdk/x/gov/client"
	"github.com/petri-labs/kaiju/x/bank/client/cli"
	"github.com/petri-labs/kaiju/x/bank/client/rest"
)

var (
	SetDenomMetaDataProposalHandler = govclient.NewProposalHandler(cli.NewSetDenomMetaDataProposalCmd, rest.SetDenomMetadataProposalRESTHandler)
)
