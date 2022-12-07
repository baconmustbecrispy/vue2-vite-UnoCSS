const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
  },
});
