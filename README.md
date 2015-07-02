# prod-module-boilerplate [![Travis-CI](https://travis-ci.org/ericelliott/prod-module-boilerplate.svg)](https://travis-ci.org/ericelliott/prod-module-boilerplate)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learn-javascript-courses/javascript-questions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

An npm `scripts` boilerplate for modules intended for production.


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

  This will run `webpack` build in watch mode and will include ESLint checks on compile time.

  ![webpack](https://cloud.githubusercontent.com/assets/175264/8304834/d66f7944-19ec-11e5-9feb-9f66caa5c593.gif)

  **Note** minified version will not be built in dev mode.


## Contributing


### Clone the repo

* Click the GitHub fork button to create your own fork
* Clone your fork of the repo to your dev system

```
git clone git@github.com:<your-github-username>/prod-module-boilerplate.git
```

### If there's no issue, please create one


### Let us Know you're working on the issue

If you're actively working on an issue, please comment in the issue thread stating that you're working on a fix, or (if you're an official contributor) assign it to yourself.

This way, others will know they shouldn't try to work on a fix at the same time.


### Create a feature branch:

```
git checkout -b <your-branch-name>
```

### Make your changes and commit:

* Make sure you comply with the [.editorconfig](http://editorconfig.org/)

```
git commit -m '[Issue #<your-issue-number>'
```

### Create a Pull Request

Please don't merge your own changes. Create a pull request so others can review the changes.

**Push changes:**

```
git push origin <your-feature-branch>
```

* Open your repository fork on GitHub
* You should see a button to create a pull request - Press it
* Consider mentioning a contributor in your pull request comments to alert them that it's available for review
* **Wait for the reviewer to approve and merge the request**

### PR Merge Exception

* Minor documentation grammar/spelling fixes (code example changes should be reviewed)


### PR Hints

Reference the issue number in your commit message e.g.:

```
$ git commit -m '[#5] Make sure to follow the PR process for contributions'
```

#### For large changes spanning many commits / PRs

* Create a meta-issue with a bullet list using the `* [ ] item` markdown syntax.
* Create issues for each bullet point
* Link to the meta-issue from each bullet point issue
* Check off the bullet list as items get completed

Linking from the bullet point issues to the meta issue will create a list of issues with status indicators in the issue comments stream, which will give us a quick visual reference to see what's done and what still needs doing.
