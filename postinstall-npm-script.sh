#!/usr/bin/env bash
yarn run universal-login:build
cp -r node_modules/universal-login-monorepo/universal-login-contracts node_modules/
rm node_modules/*/.babelrc
./node_modules/.bin/rn-nodeify --hack --install
