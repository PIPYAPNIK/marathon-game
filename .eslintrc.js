module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'no-unused-vars': 'off',
    'no-irregular-whitespace': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
  },
};
