<script setup lang="ts">
import type { ImageWithInfoProps, ImageWithInfoClassMap, ImageWithInfoResolvedClasses } from '~/types'
import { itemWithInfoClasses } from '~/types/tokens'

const props = withDefaults(defineProps<ImageWithInfoProps>(), {
    picture: () => ({
        src: 'http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&height=240&padding=false',
        alt: 'Placeholder image'
    }),
    ctaCover: () => false,
});

const { css } = useCard(props);

const computedClasses = computed<ImageWithInfoResolvedClasses>(() => (
    componentClassMerge(css.value, itemWithInfoClasses) as ImageWithInfoResolvedClasses
));

const cardClasses = computed<ImageWithInfoClassMap>(() => (
    componentClassMerge(
        itemWithInfoClasses,
        (props.classes ?? {}) as Partial<typeof itemWithInfoClasses>
    ) as ImageWithInfoClassMap
));

const singleCta = computed(() => (
    Array.isArray(props.ctas) ? undefined : props.ctas
));

</script>

<template>
    <Card :title="props.title" :tagline="props.tagline" :picture="props.picture"
        :config="{ showAllSlots: false }" :classes="cardClasses" :shadow="props.shadow">
        <template #picture>
            <slot name="picture" :picture="props.picture">
                <component :is="() => {
                    const pictureElement = h('img', {
                        src: props.picture?.src,
                        alt: props.picture?.alt,
                        class: computedClasses.picture
                    })
                    const pictureContent = pictureElement ?? undefined
                    return props.link ? h('a', { href: props.link, title: props.title, class: computedClasses.picture + ' ' + 'tw:w-full' }, pictureContent) : pictureContent                    
                }" />
            </slot>
        </template>

        <template #caption>
            <slot name="title" :title="props.title">
                <template v-if="props.link">
                    <a :href="props.link" :title="props.title">
                        <Heading :as="'h3'" :class="computedClasses.title" v-if="props.title">{{ props.title }}</Heading>
                    </a>
                </template>
                <template v-else>
                    <Heading :as="'h3'" :class="computedClasses.title" v-if="props.title">{{ props.title }}</Heading>
                </template>
            </slot>
        </template>
        <template #content>
            <slot name="author" :author="props.author">
                <p :class="computedClasses.author" v-if="props.author">{{ props.author }}</p>
            </slot>
            <slot name="format" :format="props.format">
                <p :class="computedClasses.format" v-if="props.format">{{ props.format }}</p>
            </slot>
            <slot name="price" :price="props.price">
                <div :class="computedClasses.price" v-if="props.price">
                    <p :class="computedClasses.priceRrp" v-if="props.price?.rrp">{{ props.price?.rrp?.label }}: {{
                        props.price?.rrp?.value }}</p>
                    <p :class="computedClasses.priceSale" v-if="props.price?.sale">{{ props.price?.sale?.label }}: {{
                        props.price?.sale?.value }}</p>
                </div>
            </slot>
            <slot name="availability"></slot>
        </template>
        <template #ctas :ctas="props.ctas">
            <slot name="ctas" :ctas="props.ctas" v-if="props.ctas">
                <template v-if="props.ctas && Array.isArray(props.ctas) && props.ctas.length > 0" :class="computedClasses.ctas">
                    <Button v-for="(cta, index) in props.ctas" :key="index" :label="cta.label" :href="cta.href" :color="cta.color" :inverted="cta.inverted" :type="cta.type ?? 'solid'" :size="cta.size" :modifier="cta.modifier" :classes="cta.classes" />
                </template>
                <template v-else-if="singleCta">
                    <Button :label="singleCta.label" :href="singleCta.href" :color="singleCta.color" :inverted="singleCta.inverted" :type="singleCta.type ?? 'solid'" :size="singleCta.size" :modifier="singleCta.modifier" :classes="{ base: [singleCta.classes, {'tw:before:hidden': props.ctaCover}]}" />
                </template>
            </slot>
        </template>
    </Card>


</template>