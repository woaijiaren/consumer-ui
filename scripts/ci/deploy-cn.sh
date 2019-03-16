#!/usr/bin/env bash

set -e
set -x

npm run build

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

kill `lsof -t -i :4000` || true

npx http-server-spa dist/consumer-ui index.html 4000 &

sleep 3

rm -fr /tmp/prerender || true

npx prerender mirror -r /tmp/prerender http://localhost:4000/articles/1

kill `lsof -t -i :4000` || true

rm -fr /tmp/preview || true

git clone https://asnowwolf:${GITHUB_ACCESS_TOKEN}@github.com/woaijiaren/consumer-ui-preview.git /tmp/preview

cd /tmp/preview

cp -r ../dist/consumer-ui/* .

cp index.html 404.html

cp -r /tmp/prerender/localhost:4000/* .

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push -f -u origin master

cd -
