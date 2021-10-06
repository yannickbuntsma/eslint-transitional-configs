/**
 * This is the ESLint config that we would like to have, but can currently not
 * implement because we have too many violations to fix in our current codebase.
 */
module.exports = {
  extends: ['airbnb'],
  overrides: [
    {
      files: ['src/**/*.jsx'],
      rules: {
        'jsx-a11y/alt-text': 'error',
      },
    },
  ],
};
