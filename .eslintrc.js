module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/valid-attribute-name": "off",
    "vue/valid-model-definition": "off",
    "vue/no-reserved-component-names": "off",
  },
  ignorePatterns: [
    "static/js/jquery.js",
    "static/js/slick.min.js",
    "static/js/main.js",
  ],
}
