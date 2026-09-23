import tailwindcss from '@tailwindcss/vite'
import type { PluginOption } from 'vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends: [
    './layers/tailwind',
    './layers/alpine',
    './layers/scss',
    [
      'github:JustinGardners/newGardners/layers/base',
      {
        auth: process.env.GIGET_AUTH
      }
    ]
  ],
  css: [
    '~~/layers/scss/assets/css/layer-order.css',
    '~~/layers/scss/assets/css/main.css',
    '~~/layers/tailwind/assets/css/tailwind.css'
  ],
  vite: {
    plugins: [tailwindcss() as PluginOption],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'color-functions',
            'import',
            'slash-div',
            'global-builtin',
            'if-function'
          ]
        }
      }
    }
  },
  modules: [
    '@nuxtjs/svg-sprite',
  ],   
  svgSprite: {
    input: '~/assets/sprite/svg'
  }
})
