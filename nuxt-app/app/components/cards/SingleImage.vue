<script setup lang="ts">
import type { SingleImageProps } from '~/types'

const props = withDefaults(defineProps<SingleImageProps>(), {
    picture: () => ({
        src: 'http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&height=240&padding=false',
        alt: 'Placeholder image'
    })
});

const { css, renderPicture } = useCard(props);

</script>

<template>
    <component :is="() => {
        const pictureElement = renderPicture()
        const pictureContent = pictureElement ?? undefined
        return h('article', {
            class: css.card,
            'data-card-bordered': props.bordered ?? false,
            'data-card-shadow': props.shadow ?? false,
        },
            props.link ? h('a', { href: props.link, title: props.title }, pictureContent) : pictureContent
        )
    }" />

</template>