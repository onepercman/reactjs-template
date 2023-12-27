#!/bin/bash

DEFAULT_BRANCH="develop"
DEFAULT_MODE="development"

branch=${1:-$DEFAULT_BRANCH}
mode=${2:-$DEFAULT_MODE}

echo "Branch: $branch"
echo "Mode: $mode"

# TODO: deploy script