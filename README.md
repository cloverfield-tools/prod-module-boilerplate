# prod-module-boilerplate
An npm `scripts` boilerplate for modules intended for production.


## Getting started

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


## Contributing

### Clone the repo: 

```
git clone git@github.com:ericelliott/prod-module-boilerplate.git
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
