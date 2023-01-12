// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@picocss/pico/css/pico.min.css'
  ],
  app: {
    head: {
      link: [{rel:'icon', type: 'image/png', href:"/favicon.png"}]
    }
  }
})
