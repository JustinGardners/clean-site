import type { BasketItem } from '~/types'

export default defineNuxtPlugin((nuxtApp) => {
  const basket = useState<BasketItem[]>('basket', () => [])

  nuxtApp.hook('app:mounted', () => {
    try {
      const saved = localStorage.getItem('basket')
      if (saved) {
        basket.value = JSON.parse(saved)
      }
    } catch {
      localStorage.removeItem('basket')
    }

    watch(
      basket,
      (items) => {
        localStorage.setItem('basket', JSON.stringify(items))
      },
      { deep: true },
    )
  })
})