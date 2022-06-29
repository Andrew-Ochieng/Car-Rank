import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN:process.env.AUTH_DOMAIN,
    PROJECT_ID:process.env.PROJECT_ID,
    STORAGE_BUCKET:process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
    APP_ID:process.env.APP_ID,
    // Keys within public, will be also exposed to the client-side
    public: {
      API_KEY: process.env.API_KEY,
    AUTH_DOMAIN:process.env.AUTH_DOMAIN,
    PROJECT_ID:process.env.PROJECT_ID,
    STORAGE_BUCKET:process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
    APP_ID:process.env.APP_ID,
    }
  },
  head:{
    link:[
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' },
    ]
  },
    css: [
      "@/assets/css/main.css"
    ],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
  });
