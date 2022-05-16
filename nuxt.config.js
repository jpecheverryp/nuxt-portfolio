export default {
  components: true,
  head: {
    titleTemplate: 'Juan P Echeverry %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description',
        name: 'description',
        content: 'My Personal Portfolio'
      }
    ]
  },
  modules: ['@nuxt/content'],
  buildModules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/style.css'],
  googleFonts: {
    families: {
      'Poppins': [400, 700]
    }
  }
}