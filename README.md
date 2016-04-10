# Wailorman's Development Boilerplate
[![Build Status](https://travis-ci.org/wailorman/dev-boilerplate.svg?branch=master)](https://travis-ci.org/wailorman/dev-boilerplate)

## Features:
* Tests for configured for Travis CI
* API and Client side in one project
* Unit & Integration test templates for each side

## NPM scripts
* `npm start` & `npm run start:win32` starts API in production mode
* `npm stop` & `npm run stop:win32` stops API
* `npm test` runs all tests (for Travis)
* `test:client:integration` runs karma single time
* `test:client:integration:dev` runs karma in dev mode (not exit after tests complete) and watch for changes
* `test:client:unit` runs client unit tests via mocha-webpack in cli
* `test:api:unit` runs api unit tests in cli
* `test:api:integration` is the same, but for integration tests
* **todo** `build:test:client` creates a bundle with client tests in `./dist/test`
* `build:client` creates a bundle with client side code in `./dist/bundle.js`
* `serve:test:client:integration:webpack` starts webpack-dev-server which serves client integration tests
* `serve:client` serves client side by webpack-dev-server
* `serve:api` alias to npm start

## For Webstorm
### Run mocha-webpack in Webstorm
1. Run npm building task with watch flag, i.e. `build:test:client:unit` with flag `--watch`
2. Run mocha task:
    - node parameters: `--harmony` flag
    - mocha parameters: `--require ./test/requirements/mocha.js ./public/test/unit/**/*.unit.js`