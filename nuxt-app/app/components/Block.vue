<script setup lang="ts">
import type { ClassValue } from 'clsx'
import { sectionGapName } from '~/types/tokens'
import type { SectionSpacing } from '~/types'

export type BlockProps = {
  is?: 'section' | 'div',
  wrapper?: Boolean,
  paddingY?: SectionSpacing,
  paddingTop?: SectionSpacing,
  paddingBottom?: SectionSpacing,
  classes?: ClassValue,
}


const { is = 'div', wrapper = true, paddingY, paddingTop, paddingBottom } = defineProps<BlockProps>() 

const computedPaddingY = computed(() => {
  const value = (() => {
    switch (paddingY) {
      case 'default':
        return `tw:py-section-gap`
      case 'lg':
        return `tw:py-section-gap-lg`        
      case 'xl':
        return `tw:py-section-gap-xl`
      case '2xl':
        return `tw:py-section-gap-2xl`
      case '3xl':
        return `tw:py-section-gap-3xl`                                                                
      default:
        return null
    }
  })()
  return value
})

const computedPaddingTop = computed(() => {
  const value = (() => {
    switch (paddingTop) {
      case 'default':
        return `tw:pt-section-gap`
      case 'lg':
        return `tw:pt-section-gap-lg`        
      case 'xl':
        return `tw:pt-section-gap-xl`
      case '2xl':
        return `tw:pt-section-gap-2xl`
      case '3xl':
        return `tw:pt-section-gap-3xl`                                                                
      default:
        return null
    }
  })()
  return value
})

const computedPaddingBottom = computed(() => {
  const value = (() => {
    switch (paddingBottom) {
      case 'default':
        return `tw:pb-section-gap`
      case 'lg':
        return `tw:pb-section-gap-lg`        
      case 'xl':
        return `tw:pb-section-gap-xl`
      case '2xl':
        return `tw:pb-section-gap-2xl`
      case '3xl':
        return `tw:pb-section-gap-3xl`                                                                
      default:
        return null
    }
  })()
  return value
})

const paddingClasses = computed(() => [
  computedPaddingY.value ?? '',
  computedPaddingTop.value ?? '',
  computedPaddingBottom.value ?? ''
].filter(Boolean).join(' '))


</script>

<template>
    <component :is="is" :class="[cn([{'wrapper': wrapper }, paddingClasses]), classes]">
      <slot />
    </component>
</template>