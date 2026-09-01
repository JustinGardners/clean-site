import Alpine from 'alpinejs'

// Example x-data component: <div x-data="counter">
Alpine.data('counter', () => ({
  count: 0,
  increment() {
    this.count++
  }
}))
