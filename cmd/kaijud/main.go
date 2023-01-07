package main

import (
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/petri-labs/kaiju/app"
)

func main() {
	rootCmd, _ := NewRootCmd(
		app.Name,
		app.DefaultNodeHome,
		app.ModuleBasics,
		app.NewKaiju,
		// this line is used by starport scaffolding # root/arguments
	)
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
