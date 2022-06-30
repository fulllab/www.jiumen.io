#!/usr/bin/env sh

set -e

cd web

echo 'www.jiumen.io' > CNAME

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:ZeroDAO/www.jiumen.io.git master:gh-pages

cd -
