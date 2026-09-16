<script setup lang="ts">
import { cloneVNode } from 'vue'
import type { CardImageProps } from '~/types'
import useProductImage from '~/composables/useProductImage'
import { singleImageDefaults } from '../../utils/singleImageDefaults'

const props = withDefaults(defineProps<CardImageProps>(), singleImageDefaults)

const { css, renderPicture, roundedImage } = useProductImage(props)

</script>

<template>
    <div>
        <component :is="() => {
            const pictureElement = renderPicture()
            const pictureContent = pictureElement
                ? cloneVNode(pictureElement, {
                    class: roundedImage !== '' ? roundedImage + ' ' + 'tw:overflow-clip' : ''
                })
                : undefined
            return h('article', {
                class: css.card,
                'data-card-bordered': props.bordered ?? false,
                'data-card-shadow': props.shadow ?? false,
            },
                props.link ? h('a', { href: props.link, title: props.title }, pictureContent) : pictureContent
            )
        }" />
    </div>

</template>