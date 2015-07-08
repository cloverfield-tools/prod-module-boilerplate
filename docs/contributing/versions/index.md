# Versions

## Release names

Our major releases have code-names instead of version numbers, identified by the "latest" tag. The first version is "mvp". After that we pick a theme, and work through the alphabet from A to Z.


## Version numbers

[semver](), except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch". 


### Breaking.Feature.Fix

We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people.

#### Breaking

Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release.

#### Feature

When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed.

#### Fix

When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior.
