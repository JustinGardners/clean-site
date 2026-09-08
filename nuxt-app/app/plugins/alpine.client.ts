import Alpine from 'alpinejs'

import '~~/layers/alpine/src/components/counter'

export default defineNuxtPlugin((nuxtApp) => {
  window.Alpine = Alpine

  nuxtApp.hook('app:mounted', () => {
    Alpine.start()
  })
})