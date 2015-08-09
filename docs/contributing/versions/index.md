# Versions: Release Names vs Version Numbers
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [What?](#what)
- [Why?](#why)
- [Details](#details)
  - [Release Names (AKA code names)](#release-names-aka-code-names)
    - [MVP](#mvp)
  - [Version Numbers](#version-numbers)
    - [Breaking.Feature.Fix](#breakingfeaturefix)
      - [Breaking](#breaking)
      - [Feature](#feature)
      - [Fix](#fix)
- [Examples](#examples)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What?

Version numbers are **only** there to communicate the nature of a change: **Breaking.Feature.Fix**.

Human names are there to communicate, "Hey everybody, we have a new release! Here are the new features!"

## Why?

Our releases and versions are separate concepts because the need to communicate new stable release information and the need to inform developers about the nature of changes (breaking, new features, or fixes/security patches) are two separarete concerns which advance on separate timetables.

The conflating of version numbers and public releases has led to a big problem in the software development community. Developers tend to break semantic version numbering, for example, resisting the need to advance the breaking (major) version number because they're not yet ready to release their mvp (which many developers think of as 1.0).

In other words, we need two separate ways of tracking changes:

* One for people & public announcements (names).
* One for resolving version conflict problems (numbers).

## Details

### Release Names (AKA code names)

Our major releases have code-names instead of version numbers. The current release is identified by the "latest" tag. The first version is "mvp". After that we pick a theme, and work through the alphabet from A to Z.

When talking about release versions, we don't say "version Arty" we say "the newest version was released today, code named 'Arty'". After that, we just refer to it as "Arty" or "latest version". More recognizable codename examples include "Windows Vista" or "OS X Yosemite".


#### MVP

MVP stands for "Minimum **Valuable** Product" (a better version of the common "Minimum Viable Product"). The minimum number of features to make the product valuable to users.

![mvp](https://cloud.githubusercontent.com/assets/364727/8585378/4222fd84-259e-11e5-804c-33ec952ca88d.png)


### Version Numbers

[Semver](http://semver.org), except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".


#### Breaking.Feature.Fix

We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people.

##### Breaking

Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release.

##### Feature

When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed.

##### Fix

When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior.



## Examples

If it's time to write a blog post to inform the community about new features or important changes, we find the version we want to publicize, tag it "latest", give it a human-readable name, (i.e. "MVP" or "Art Nouveau" in the case of the [JSHomes API](https://github.com/jshomes/jshomes-platform-api/blob/master/README.md#jshomes-api-)).

That human readable release name **does not replace semver**. "MVP" might correspond to `v1.6.23` or `v2.2.5` -- the point is, **the numbered version has nothing to do with the named release**.

The numbered version is there so npm and developers can tell whether or not a new version is a breaking change, an added feature change, or a bug / security fix.


