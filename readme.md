# create-ts-cli-app

> CLI for creating node CLI app with Typescript support .

[![NPM](https://img.shields.io/npm/v/@21epub/create-ts-cli-app.svg)](https://www.npmjs.com/package/@21epub/create-ts-cli-app) [![Build Status](https://travis-ci.com/21epub/create-ts-cli-app.svg?branch=master)](https://travis-ci.com/21epub/create-ts-cli-app) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

Eazy to create a CLI app .

Typescript Support for source code development .

Eazy to Release and Publish your CLI app .

## Features

- [x] Easy-to-use CLI
- [x] Handles all modern JS features
- [x] [Rollup](https://rollupjs.org/) for bundling
- [x] [Babel](https://babeljs.io/) for transpiling
- [x] [Jest + testing-library](https://facebook.github.io/jest/) for testing.
- [x] TypeScript Only
- [x] Sourcemap creation
- [x] lint-staged support
- [X] [Conventional commit](https://github.com/streamich/git-cz) by `git-cz`
- [X] [standard-version](https://www.npmjs.com/package/standard-version?activeTab=versions) support by `npm run release`
- [X] Format on Save ( Vscode Editor )
- [X] Travis CI & Code coverage by custom configration

## Install globally

This package requires `node >= 10`.

```bash
npm install -g @21epub/create-ts-cli-app
```

## Usage with npx ( Recommand )

> No need to create an empty folder before running.

```bash
npx @21epub/create-ts-cli-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

## Creating a New CLI APP

```bash
create-ts-cli-app
```

Answer some basic prompts about your app, and then the CLI will perform the following steps:

- copy over the template
- install dependencies via yarn or npm
- initialize local git repo

At this point, your new app is ready and is all setup for local development.

## Development

Now, anytime you can keep on developing

```bash
npm start # start bundle and watch your dev code  
```

Then, you can run your CLI

```bash
node . # -> node ./dist/index.js  
```

Commit Method Recommandation

```bash
npm run commit # lint before commit can save your time , and then conventional commit with git-cz
```

#### Publishing to npm

```bash
npm run release # Version and changelog
git push --follow-tags origin master
npm publish # The `prePublishOnly` hook will run before publish to build and test your package
```

This builds `commonjs` of your module to `dist/` and then publishes your module to `npm`.

## License

MIT © [21epub](https://github.com/21epub)
