// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2025-02-24'
});