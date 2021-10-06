module.exports = {
  extends: ['airbnb'],
  overrides: [
    {
      files: ['src/**/*.jsx'],
      rules: {
        'jsx-a11y/alt-text': 'off',
      },
    },
  ],
};
