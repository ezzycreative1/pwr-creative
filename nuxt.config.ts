// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  //target: 'static', // Untuk deploy di Netlify
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'PWR Creative - Your Creative Partner',
      meta: [
        { name: 'description', content: 'PWR Creative adalah studio kreatif yang menyediakan jasa desain, branding, dan pengembangan web.' }
      ],
    },
  },
});
