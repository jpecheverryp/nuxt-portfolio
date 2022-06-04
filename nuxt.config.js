export default {
  components: true,
  target: 'static',
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
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico' 
      }
    ]
  },
  modules: [
    ['nuxt-content-git', {
      createdAtName: 'gitCreatedAt',
      updatedAtName: 'gitUpdatedAt',
    }],
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  css: ['~/assets/css/style.css'],
  googleFonts: {
    families: {
      'Poppins': [400, 700]
    }
  },
  devServerHandlers: [],
}