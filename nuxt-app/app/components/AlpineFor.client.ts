import Alpine from 'alpinejs'
import type { PropType, VNode } from 'vue'
import { defineComponent, h, useAttrs } from 'vue'

export default defineComponent({
  name: 'AlpineFor',
  inheritAttrs: false,
  props: {
    data: {
      type: Object as PropType<Record<string, unknown>>,
      required: true
    },
    items: {
      type: String,
      required: true
    },
    item: {
      type: String,
      default: 'item'
    },
    itemKey: String,
    wrapperElement: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    const attrs = useAttrs()

    const initialize = ({ el }: VNode) => {
      if (!(el instanceof HTMLElement)) {
        return
      }

      const [slotStaging] = Array.from(el.children)
      if (!(slotStaging instanceof HTMLElement)) {
        return
      }

      const key = props.itemKey ? ` :key="${props.itemKey}"` : ''
      el.innerHTML = `<template x-for="${props.item} in ${props.items}"${key}>${slotStaging.innerHTML}</template>`
      Alpine.initTree(el)
    }

    return () => h(props.wrapperElement, {
      ...attrs,
      'x-data': JSON.stringify(props.data),
      'style': `--${props.items}-length: ${Object.keys(props.data[props.items] || {}).length};`,
      onVnodeMounted: initialize
    }, [
      h('div', { hidden: true }, slots.item?.())
    ])
  }
})