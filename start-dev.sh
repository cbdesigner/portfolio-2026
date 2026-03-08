#!/bin/bash
export PATH="/usr/local/bin:$PATH"
cd "$(dirname "$0")"
npx next dev --port 3001
