import tailwindcss from '@tailwindcss/vite'
import type { PluginOption } from 'vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends: ['./layers/tailwind'],
  css: [
    '~/assets/css/layer-order.css',
    '~/assets/css/main.css',
    './layers/tailwind/assets/css/tailwind.css'
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
  }
})
