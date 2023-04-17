#!/bin/sh
set -e

cd /app
echo "Cargando variables de entorno ..."
printenv | grep -E '^REACT_APP_' > .env
cat .env
echo "Lanzando el servidor http ..."
http-server -c-1 -a 0.0.0.0 -p 80 -d false
