module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        semi: true,
        tabWidth: 2,
      },
    ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
