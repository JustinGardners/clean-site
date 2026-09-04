import Glide from '@glidejs/glide'

const mountedElements = new WeakSet<Element>()

const getOptions = (element: Element) => {
  const config = element.getAttribute('data-glide')

  if (!config) {
    return undefined
  }

  try {
    return JSON.parse(config)
  } catch {
    return undefined
  }
}

export const mountGlides = (root: ParentNode = document) => {
  root.querySelectorAll('.glide').forEach((element) => {
    if (mountedElements.has(element)) {
      return
    }

    new Glide(element, getOptions(element)).mount()
    mountedElements.add(element)
  })
}

export const autoMountGlides = () => {
  if (window.__NUXT__) {
    return
  }

  const start = () => mountGlides()

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true })
  } else {
    start()
  }
}
