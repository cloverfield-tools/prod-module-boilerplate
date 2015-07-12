# Contributing
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Reporting bugs](#reporting-bugs)
  - [Example](#example)
- [Getting Started](#getting-started)
  - [Clone the repo](#clone-the-repo)
  - [If there's no issue, please create one](#if-theres-no-issue-please-create-one)
  - [Let us Know you're working on the issue](#let-us-know-youre-working-on-the-issue)
  - [Create a feature branch:](#create-a-feature-branch)
  - [Make your changes and commit:](#make-your-changes-and-commit)
  - [Create a Pull Request](#create-a-pull-request)
  - [PR Merge Exception](#pr-merge-exception)
  - [PR Hints](#pr-hints)
    - [For large changes spanning many commits / PRs](#for-large-changes-spanning-many-commits--prs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
- [Versions: Release Names vs Version Numbers](versions/index.md)

## Reporting bugs

Bug reports should contain the following information:

* Summary: A brief description.
* Steps to reproduce: How did you encounter the bug? Instructions to reproduce it.
* Expected behavior: How did you expect it to behave?
* Actual behavior: How did it actually behave?
* Screenshot or animated gif: If possible, attach visual documentation of the bug.
* References: Links to any related tickets or information sources.

### Example

Here's a [real issue](https://github.com/woothemes/woocommerce/issues/8563#issue-94518347) to demonstrate.


## Getting Started

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
git commit -m '[Issue #<your-issue-number>] <short description of change>'
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
