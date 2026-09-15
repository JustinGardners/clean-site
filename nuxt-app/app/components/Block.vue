<script setup lang="ts">
import type { ClassValue } from 'clsx'

export type BlockProps = {
  is?: 'section' | 'div',
  wrapper?: Boolean,
  classes?: ClassValue,
}

const { is = 'div', wrapper = true } = defineProps<BlockProps>() 
</script>

<template>
    <component :is="is" :class="[{'wrapper': wrapper }, classes]">
      <slot />
    </component>
</template>