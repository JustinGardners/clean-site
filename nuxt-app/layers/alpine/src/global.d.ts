import type { Alpine as AlpineType } from 'alpinejs'

declare global {
  interface Window {
    Alpine: AlpineType
    __NUXT__?: unknown
  }
}

export {}
