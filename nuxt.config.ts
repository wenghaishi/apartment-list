// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  nitro: {
    plugins: ["~/server/index.js"],
  },
  runtimeConfig:{
    mongodbUri: process.env.MONGODB_URI
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
