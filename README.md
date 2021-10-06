# How to use this repo

This repo is a POC to test transitional ESLint configs. The aim is to gradually introduce stricter linting rules in already existing codebases, where it is hard to fix all violations at once when a linting rule changes.

There are two ESLint configs:
1. The "transitional" ESLint config, with the regular file name `.eslintrc.js`. This is used by the IDE and the precommit hook.
2. The "current" ESLint config, with the `.eslintrc.current.js` file name. This is used to lint the entire codebase.

To start, undo the last commit:
```sh
git reset --soft HEAD~1
```

You should see the alt tag on the HTML in `./src/WillFailOnCommit.jsx` has been removed. This is an accessibility violation. With the ESLint setup in this repo, you should see this violation reported in your IDE now. The IDE uses the `eslintrc.js` file by default, which is the configuration we want to transition to and contains our **desired** linting rules. This configuration is also used in the precommit hook, so new code will adhere to our desired linting rules.

If you try and commit the `./src/WillFailOnCommit.jsx` file now, you should see the precommit hook fail because of the accessibility violation.

When you run `yarn lint` though, we use the "current" (or any other name) configuration. This contains the linting rules we **currently** can adhere to. This is the configuration we'll use to lint the entire codebase.

If you run `yarn lint` know, you should see the command exiting without errors (even though the accessibility violation is still in your working tree).

To reset the repo to the state it was in when you cloned it, run:
```sh
git reset HEAD
git reset --hard origin/main
```