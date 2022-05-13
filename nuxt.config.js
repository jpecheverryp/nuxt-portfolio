export default {
  components: true,
  head: {
    titleTemplate: 'Juan P Echeverry %s',
    htmlAttrs: {
      lang: 'en'
    }
  },
  buildModules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/style.css'],
  googleFonts: {
    families: {
      'Poppins': [400]
    }
  }
}