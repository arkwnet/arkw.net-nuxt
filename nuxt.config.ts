// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  components: true,
  app: {
    head: {
      title: "Arakawa Laboratory",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://arkw.net/img/favicon.ico",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap",
        },
      ],
    },
  },
  css: ["../assets/sass/app.scss"],
  modules: ["@nuxtjs/i18n", "@nuxt/image", "nuxt-gtag", "nuxt-swiper"],
  plugins: ["../plugins/click-outside.js"],
  i18n: {
    locales: [
      { code: "ja", name: "日本語", iso: "ja", file: "ja.json" },
      { code: "en", name: "English", iso: "en", file: "en.json" },
      { code: "zh", name: "简体中文", iso: "zh", file: "zh.json" },
    ],
    defaultLocale: "ja",
  },
  gtag: {
    id: "G-SCQWSHWQSB",
  },
})
