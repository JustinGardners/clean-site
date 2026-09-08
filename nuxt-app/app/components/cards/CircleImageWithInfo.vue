<script setup lang="ts">
import type { CardImageProps, ImageWithInfoProps } from '~/types'

const props = withDefaults(defineProps<ImageWithInfoProps>(), {
    roundedImage: () => 'full'
})

const defaultClasses: CardImageProps['classes'] = {
    card: 'tw:card-picture-aspect-square tw:[--card-body-padding-block:var(--space-sm)]',
    picture: 'tw:*:object-cover',
    body: 'tw:text-center tw:justify-center',
    caption: {'tw:[&_a]:before:content-[""] tw:[&_a]:before:absolute tw:[&_a]:before:inset-0': props.link},
    title: 'tw:text-center'
}

const computedClasses = computed<ImageWithInfoProps['classes']>(() => ({
    ...defaultClasses,
    ...props.classes
}))    

</script>

<template>    
    <CardsImageWithInfo v-bind="props" :classes="computedClasses" />
</template>