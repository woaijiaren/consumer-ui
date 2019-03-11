#!/usr/bin/env bash

set -e
set -x

npm run build

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

kill `lsof -t -i :4000` || true

npx http-server-spa dist/woaijiaren index.html 4000 &

rm -fr ./prerender || true

npx prerender mirror -r ./prerender http://localhost:4000/

kill `lsof -t -i :4000` || true

git clone https://asnowwolf:${GITHUB_ACCESS_TOKEN}@github.com/asnowwolf/5aijiaren.com-prebuilt.git prebuilt

cd ./prebuilt

cp -r ../dist/woaijiaren/* .

cp index.html 404.html

cp -r ../prerender/localhost:4000/* .

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push -f -u origin master

cd -
