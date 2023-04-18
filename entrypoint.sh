#!/bin/sh
set -e

cd /app
npx react-inject-env set && http-server -c-1 -a 0.0.0.0 -p 80 -d false
