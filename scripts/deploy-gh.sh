#!/usr/bin/env sh

set -e

cd web

echo 'jiumen.io' > CNAME

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:fulllab/www.jiumen.io.git master:gh-pages

cd -
