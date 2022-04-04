module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
  ignoreFiles: [
    "static/css/slick.css",
    "static/css/slick-theme.css",
    "components/*.vue",
    "pages/*.vue",
  ],
  customSyntax: "postcss-html",
}
