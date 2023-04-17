#!/bin/sh
set -e

cd /app
echo "Cargando variables de entorno ..."
set -x
for var in $(env | grep REACT_APP_ | awk -F '=' '{print $1}'); do
  echo "${var}=${!var}" >> .env
done
set +x
cat .env
echo "Lanzando el servidor http ..."
http-server -c-1 -a 0.0.0.0 -p 80 -d false
