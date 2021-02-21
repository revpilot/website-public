const PrismicConfig = require("./prismic.config");
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sales Sensei - Enabling world-class Sales & Marketing Execution',
    bodyAttrs: {
      class: 'bg-light',
      'data-aos-easing': 'ease',
      'data-aos-duration': 400,
      'data-aos-delay': 0
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "/css/theme.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" },
      { rel: "stylesheet", href: "/css/vendor.min.css" },
      { rel: "stylesheet", href: "/vendor/jarallax/dist/jarallax.css" },
    ],
    script: [
      { src: "//static.cdn.prismic.io/prismic.min.js" },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      },
      { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" },
      { src: "/js/vendor.min.js" },
      { src: "/js/theme.min.js" },
      { src: "/vendor/smooth-scroll/smooth-scroll.min.js" },
      { src: "/vendor/swiper/swiper.min.js" },
      { src: "/vendor/zoomerang/zoomerang.js" },
      { src: "/vendor/highlight/highlight.min.js" },
      { src: "/vendor/atvImg/atvImg-min.js" },
      { src: "/vendor/jarallax/dist/jarallax.min.js" },
      { src: "/vendor/jarallax/dist/jarallax-video.min.js" },
      { src: "/vendor/jarallax/dist/jarallax-element.min.js" },
      { src: "/vendor/aos/aos.js" },
      { src: "/vendor/jquery.elevateZoom/jquery.elevateZoom.min.js" },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  script: [
    {
      innerHTML:
        '{ window.prismic = { endpoint: "' +
        PrismicConfig.apiEndpoint +
        '"} }'
    }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
