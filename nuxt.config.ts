// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxtjs/tailwindcss', 'nuxt-mail'],

  app: {
    head: {
      title: 'TreePsy - Sua marca, seus pacientes, nossa tecnologia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Tenha sua página personalizada com agendamento e pagamento integrados, sem depender de marketplaces tradicionais. Comece gratuitamente por 14 dias.'
        },
        { name: 'keywords', content: 'terapia, psicologia, agendamento, pagamento, consultório online, terapeutas, psicólogos' },
        { name: 'author', content: 'TreePsy' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'TreePsy - Sua marca, seus pacientes, nossa tecnologia' },
        {
          property: 'og:description',
          content: 'Tenha sua página personalizada com agendamento e pagamento integrados, sem depender de marketplaces tradicionais.'
        },
        { property: 'og:image', content: '/terapy.png' },
        { property: 'og:url', content: 'https://treepsy.com' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'TreePsy - Sua marca, seus pacientes, nossa tecnologia' },
        {
          name: 'twitter:description',
          content: 'Tenha sua página personalizada com agendamento e pagamento integrados, sem depender de marketplaces tradicionais.'
        },
        { name: 'twitter:image', content: '/terapy.png' },

        // Additional SEO
        { name: 'theme-color', content: '#8B5CF6' },
        { name: 'msapplication-TileColor', content: '#8B5CF6' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    }
  },

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
