export default {
  components: true,
  head: {
    titleTemplate: 'Juan P Echeverry %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    }]
  },
  modules: ['@nuxt/content'],
  buildModules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/style.css'],
  googleFonts: {
    families: {
      'Poppins': [400]
    }
  }
}