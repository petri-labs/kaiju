#!/usr/bin/env sh

##
## Input parameters
##
BINARY=/kaiju/${BINARY:-kaijud}
ID=${ID:-0}
LOG=${LOG:-kaijud.log}

##
## Assert linux binary
##
if ! [ -f "${BINARY}" ]; then
	echo "The binary $(basename "${BINARY}") cannot be found. Please add the binary to the shared folder. Please use the BINARY environment variable if the name of the binary is not 'kaijud' E.g.: -e BINARY=kaijud_my_test_version"
	exit 1
fi
BINARY_CHECK="$(file "$BINARY" | grep 'ELF 64-bit LSB executable, x86-64')"
if [ -z "${BINARY_CHECK}" ]; then
	echo "Binary needs to be OS linux, ARCH amd64"
	exit 1
fi

##
## Run binary with all parameters
##
export KAIJU_HOME="/kaiju/node${ID}/kaijud"

if [ -d "$(dirname "${KAIJU_HOME}"/"${LOG}")" ]; then
  "${BINARY}" --home "${KAIJU_HOME}" --trace "$@" | tee "${KAIJU_HOME}/${LOG}"
else
  "${BINARY}" --home "${KAIJU_HOME}" --trace "$@"
fi
