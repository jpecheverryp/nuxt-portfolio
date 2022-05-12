export default {
  components: true,
  head: {
    titleTemplate: 'Juan P Echeverry %s',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      style: ['my-style']
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