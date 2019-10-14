module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'scope-case': [2, 'always', 'kebab-case'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature
        'fix', // A bug fix
        'wip', // Work in progress
        'chore', // Build process or auxiliary tool changes
        'refactor', // A code change that neither fixes a bug or adds a feature
        'style', // Markup, white-space, formatting, missing semi-colons...
        'test', // Adding missing tests
        'perf', // A code change that improves performance,
        'docs', // Documentation only changes
        'ci', // CI related changes
        'revert', // Revert to a commit
      ],
    ],
  },
};
