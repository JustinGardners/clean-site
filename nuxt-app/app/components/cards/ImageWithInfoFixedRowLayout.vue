<script setup lang="ts">
import type { CardImageProps, ImageWithInfoProps } from '~/types'

const slots = useSlots()

const props = withDefaults(defineProps<ImageWithInfoProps>(), {
    config: () => ({
        fixedLayout: 'row',
    }),
    ctaCover: () => true
})

const defaultClasses: CardImageProps['classes'] = {
    caption: {'tw:[&_a]:before:content-[""] tw:[&_a]:before:absolute tw:[&_a]:before:inset-0': props.link && props.ctaCover && (!props.ctas || !slots.cta)},
}

const computedClasses = computed<ImageWithInfoProps['classes']>(() => ({
    ...defaultClasses,
    ...props.classes
}))    

</script>

<template>
    <CardsImageWithInfo v-bind="props" :classes="computedClasses" />
</template>