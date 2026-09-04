import { nextTick } from 'vue'
import { mountGlides } from '../../layers/alpine/src/glide'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', async () => {
    await nextTick()
    mountGlides()
    window.setTimeout(mountGlides, 0)
    window.setTimeout(mountGlides, 100)
  })
})