// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/scss/main.scss'
  ],
  app: {
    head: {
      link: [{rel:'icon', type: 'image/png', href:"/favicon.png"}]
    }
  }
})
