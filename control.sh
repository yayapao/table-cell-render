#!/bin/bash

# app version
version="1.1.0"
app="cell-render"

echo "hello cell-render"

function build() {
  echo ">> The current version of $app is $version\n"
  cp src/index.d.ts npm/index.d.ts
}


if [ "$1" == "" ]; then
  help
elif [ "$1" == "build" ]; then
  build
else
  help
fi