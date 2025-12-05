#!/bin/bash
# Helper script to run bundle with the correct Ruby path
export PATH="$HOME/.local/share/gem/ruby/3.3.0/bin:$PATH"
bundle "$@"
