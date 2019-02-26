#!/usr/bin/env bash

set -e
set -x

npm run build

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

git clone https://asnowwolf:${GITHUB_ACCESS_TOKEN}@github.com/asnowwolf/5aijiaren.com-prebuilt.git prebuilt

cd ./prebuilt

cp -r ../dist/woaijiaren/* .

cp index.html 404.html

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push -f -u origin master

cd -
