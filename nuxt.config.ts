// https://nuxt.com/docs/api/configuration/nuxt-config

const title =
  "Webdevelopment Frontend Backend Fullstack Javascript Node HTML CSS SEO Civan Erbay";
const description =
  "Professional javascript HTML CSS Node vue webdesign frontend backend fullstack web development and seo services";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss" /* , "nuxt-security" */],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: description,
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: description,
        },
        {
          hid: "title",
          name: "title",
          content: description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Realtime, interactive, installations",
        },
      ],
      link: [],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
