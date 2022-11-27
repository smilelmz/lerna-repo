module.exports = {
  env: {
    browser: true, // tool-browser 启用
    es2021: true,
    node: true // tool-node 启用
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [
    '.eslintrc.js',
    'rollup.config.js',
    'package.json',
    'tsconfig.json',
    'node_modules'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off'
  }
}
