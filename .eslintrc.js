module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "indent": ["error", "tab", { "SwitchCase": 1 }],
    "no-tabs": "off",
    'no-undef': ["warn", { "typeof": false }],
    'import/no-webpack-loader-syntax': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-throw-literal': 'off',
    'no-multiple-empty-lines': 'off'
  },
  globals: {}
}
