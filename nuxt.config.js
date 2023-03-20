export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Arakawa Laboratory",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://arkw.net/img/favicon.ico",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/sass/app.scss", lang: "scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    "@nuxtjs/style-resources",
    "@nuxt/postcss8",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/axios"],
    [
      "@nuxtjs/google-gtag",
      {
        id: "G-SCQWSHWQSB",
        debug: true,
      },
    ],
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "ja", name: "日本語", iso: "ja", file: "ja.json" },
          { code: "en", name: "English", iso: "en", file: "en.json" },
        ],
        defaultLocale: "ja",
        langDir: "locales/",
        strategy: "prefix_and_default",
        vueI18n: {
          fallbackLocale: "ja",
        },
        vueI18nLoader: true,
        lazy: true,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({ isServer }, [preset, options]) {
        options.loose = true
      },
    },
    postcss: {
      plugins: {},
      preset: {},
    },
  },

  axios: {
    proxy: true,
  },

  proxy: {
    "/api/": "http://arkw.net/",
  },
}
