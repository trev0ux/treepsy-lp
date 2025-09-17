// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxtjs/tailwindcss', 'nuxt-mail'],

  // Email configuration
  mail: {
    message: {
      to: 'miraisoft.co@gmail.com',
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.NUXT_MAIL_USER,
        pass: process.env.NUXT_MAIL_PASS,
      },
    },
  },
})
