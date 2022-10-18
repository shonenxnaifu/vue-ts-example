/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

// module.exports = {
//   root: true,
//   'extends': [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-typescript',
//     '@vue/eslint-config-prettier'
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest'
//   }
// }

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-airbnb-with-typescript",
    "plugin:prettier/recommended",
  ],
};
