<script setup lang="ts">
import type { CardImageProps } from '~/types'

const defaultClasses: CardImageProps['classes'] = {
    card: 'tw:card-picture-aspect-square',
    picture: 'tw:*:object-cover'
}

const props = defineProps<CardImageProps>()

const computedClasses = computed<CardImageProps['classes']>(() => ({
    ...defaultClasses,
    ...props.classes
}))

</script>

<template>
	<CardsSingleImage
        v-bind="props"
        rounded-image="full"
        :classes="computedClasses"
    />
</template>