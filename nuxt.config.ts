import { defineNuxtConfig } from "@nuxt/bridge"

export default defineNuxtConfig({
  bridge: {
    capi: true,
    typescript: true,
    meta: true,
    nitro: false,
  },
  target: "static",
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
  css: ["~/assets/sass/app.scss"],
  plugins: [],
  components: true,
  modules: [
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
          { code: "zh", name: "简体中文", iso: "zh", file: "zh.json" },
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
    "@nuxtjs/style-resources",
    "@nuxt/image",
  ],
  build: {
    babel: {
      presets({ isServer }, [preset, options]) {
        options.loose = true
      },
    },
  },
})
