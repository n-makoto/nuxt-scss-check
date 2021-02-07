require('dotenv').config()

const extractEnv = ({
                      NODE_ENV,
                      VUE_APP_API_ENDPOINT,
                      VUE_APP_FIREBASE_API_KEY,
                      VUE_APP_FIREBASE_AUTH_DOMAIN,
                      VUE_APP_FIREBASE_DATABASE_URL,
                      VUE_APP_FIREBASE_PROJECT_ID,
                      VUE_APP_FIREBASE_STORAGE_BUCKET,
                      VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
                      VUE_APP_SMARTLOOK_ENABLE_REG,
                      VUE_APP_SMARTLOOK_API_KEY,
                      VUE_APP_DISABLE_SET_INTERVAL,
                      VUE_APP_REVISION_ID,
                      VUE_CLI_KEEP_TEST_ATTRS,
                      VUE_APP_HELP_URL,
                      VUE_APP_I18N_LOCALE,
                      VUE_APP_I18N_FALLBACK_LOCALE
                    }) => {
  return {
    NODE_ENV,
    VUE_APP_API_ENDPOINT,
    VUE_APP_FIREBASE_API_KEY,
    VUE_APP_FIREBASE_AUTH_DOMAIN,
    VUE_APP_FIREBASE_DATABASE_URL,
    VUE_APP_FIREBASE_PROJECT_ID,
    VUE_APP_FIREBASE_STORAGE_BUCKET,
    VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    VUE_APP_SMARTLOOK_ENABLE_REG,
    VUE_APP_SMARTLOOK_API_KEY,
    VUE_APP_DISABLE_SET_INTERVAL,
    VUE_APP_REVISION_ID,
    VUE_CLI_KEEP_TEST_ATTRS,
    VUE_APP_HELP_URL,
    VUE_APP_I18N_LOCALE,
    VUE_APP_I18N_FALLBACK_LOCALE
  }
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'saas-client',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/_index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['~/assets/styles/_index.scss'],
    sass: ['~/assets/styles/_index.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: extractEnv(process.env)
}
