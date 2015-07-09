# prod-module-boilerplate [![Circle CI](https://circleci.com/gh/cloverfield-tools/prod-module-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/cloverfield-tools/prod-module-boilerplate/tree/master)
[![Travis-CI](https://travis-ci.org/cloverfield-tools/prod-module-boilerplate.svg)](https://travis-ci.org/cloverfield-tools/prod-module-boilerplate)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learn-javascript-courses/javascript-questions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

An npm `scripts` boilerplate for modules intended for production.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Clone the repo](#clone-the-repo)
  - [Customize package.json](#customize-packagejson)
  - [Configure your CI build](#configure-your-ci-build)
  - [Customize the README.md file](#customize-the-readmemd-file)
  - [Build your module](#build-your-module)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
- [Contributing](docs/contributing/index.md)
  - [Versions: Release Names vs Version Numbers](docs/contributing/versions/index.md)

## Features

* ES6 with Babel
* Lint with ESLint
* Tape tests with coverage report
* Dependency security audits with nsp
* Ensure dependencies are properly declared in package.json
* Git precommit hook enforces quality checks on commit
* Travis CI integration


## Getting Started

### Clone the repo

In a bash terminal:

```
git clone git@github.com:ericelliott/prod-module-boilerplate.git <your-new-repo-name>
cd <your-repo-name>
rm -rf <.git> # strip the boilerplate .git config
git init # create your own .git config
git add .
git commit -m 'Initial commit'
```

### Customize package.json

Open up `package.json`. At minimum, you'll need to customize the `name`, `description`, & `version` fields.


### Configure your CI build

This package comes with a `.travis.yml` file. You'll need to replace it with your own build config. If you want to continue using TravisCI and you don't see any problems with the config, replacing `.travis.yml` is optional. You still need to activate [Travis CI for your repository](http://docs.travis-ci.com/user/getting-started/).


### Customize the README.md file

Pop open README.md. Find this text:

```
[![Travis-CI](https://travis-ci.org/ericelliott/prod-module-boilerplate.svg)](https://travis-ci.org/ericelliott/prod-module-boilerplate)
```

And replace it with your info:

```
[![Travis-CI](https://travis-ci.org/<your-github-name>/<your-github-repo-name>.svg)](https://travis-ci.org/<your-github-name>/<your-github-repo-name>)
```

You'll probably also want to replace the content of "Getting Started" & "Features", and ensure that you're refering to the correct repository in the "Contributing" document.


### Build your module

1. For production

  ```sh
  npm run build
  ```

  It will run webpack once building full and minified versions of your lirary in `./build` with sourcemaps.


2. For development

  ```sh
  npm start
  ```

  This will run the `webpack` build in watch mode and will include ESLint checks on compile time.

  ![webpack](https://cloud.githubusercontent.com/assets/175264/8304834/d66f7944-19ec-11e5-9feb-9f66caa5c593.gif)

  **Note** minified version will not be built in dev mode.

