# @wowvendor/commitlint-config

> Lint your commits

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Shareable `commitlint` config enforcing [conventional commits](https://conventionalcommits.org/). Use with
[@commitlint/cli](https://npm.im/@commitlint/cli) and [@commitlint/prompt-cli](https://npm.im/@commitlint/prompt-cli).

## Getting started

```sh
npm install --save-dev @wowvendor/commitlint-config @commitlint/cli
echo "module.exports = {extends: ['@wowvendor/commitlint-config']};" > commitlint.config.js
```

## Rules

### Problems

The following rules are considered problems for `@commitlint/config-conventional` and will yield a non-zero exit code
when not met.

Consult [docs/rules](https://conventional-changelog.github.io/commitlint/#/reference-rules) for a list of available
rules.

#### type-enum

- **condition**: `type` is found in value
- **rule**: `always`
- **value**

  ```javascript
  [
    "feat", // A new feature
    "fix", // A bug fix
    "wip", // Work in progress
    "chore", // Build process or auxiliary tool changes
    "refactor", // A code change that neither fixes a bug or adds a feature
    "style", // Markup, white-space, formatting, missing semi-colons...
    "test", // Adding missing tests
    "perf", // A code change that improves performance,
    "docs", // Documentation only changes
    "ci", // CI related changes
    "revert", // Revert to a commit
  ];
  ```

```sh
echo "foo: some message" # fails
echo "fix: some message" # passes
```

#### type-case

- **description**: `type` is in case `value`
- **rule**: `always`
- **value**
  ```shell script
  'lower-case';
  ```

```sh
echo "FIX: some message" # fails
echo "fix: some message" # passes
```

#### type-empty

- **condition**: `type` is empty
- **rule**: `never`

```sh
echo ": some message" # fails
echo "fix: some message" # passes
```

#### scope-case

- **condition**: `scope` is in case `value`
- **rule**: `always`

```sh
'kebab-case';
```

```sh
echo "fix(SCOPE): some message" # fails
echo "fix(scope): some message" # passes
echo "fix(some-scope): some message" # passes
```

#### subject-case

- **condition**: `subject` is in one of the cases `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
- **rule**: `never`

```sh
echo "fix(SCOPE): Some message" # fails
echo "fix(SCOPE): Some Message" # fails
echo "fix(SCOPE): SomeMessage" # fails
echo "fix(SCOPE): SOMEMESSAGE" # fails
echo "fix(scope): some message" # passes
echo "fix(scope): some Message" # passes
```

#### subject-empty

- **condition**: `subject` is empty
- **rule**: `never`

```sh
echo "fix:" # fails
echo "fix: some message" # passes
```

#### subject-full-stop

- **condition**: `subject` ends with `value`
- **rule**: `never`
- **value**

```sh
'.';
```

```sh
echo "fix: some message." # fails
echo "fix: some message" # passes
```

#### header-max-length

- **condition**: `header` has `value` or less characters
- **rule**: `always`
- **value**

```sh
100;
```

```sh
echo "fix: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" # fails
echo "fix: some message" # passes
```
