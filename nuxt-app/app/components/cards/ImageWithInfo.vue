<script setup lang="ts">
import type { ImageWithInfoProps } from '~/types'
import useProductImage from '~/composables/useProductImage'

const props = withDefaults(defineProps<ImageWithInfoProps>(), {
    picture: () => ({
        src: 'http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&height=240&padding=false',
        alt: 'Placeholder image'
    }),
    ctaCover: () => false,
    config: () => ({
        showAllSlots: false
    })
});

const { computedClasses, singleCta, roundedImage } = useProductImage(props)

const slots = useSlots()

</script>

<template>
    <Card :title="props.title" :subtitle="props.subtitle" :tagline="props.tagline" :picture="props.picture"
        :config="props.config" :classes="computedClasses" :shadow="props.shadow">
        <template #picture>
            <slot name="picture" :picture="props.picture">
                <component :is="() => {
                    const pictureElement = h('img', {
                        src: props.picture?.src,
                        alt: props.picture?.alt,
                        class: [(roundedImage !== '' ? roundedImage + ' ' + 'tw:overflow-clip' : '')]
                    })
                    const pictureContent = pictureElement ?? undefined
                    return props.link ? h('a', { href: props.link, title: props.title, class: 'tw:w-full' }, pictureContent) : pictureContent                    
                }" />
            </slot>
        </template>

        <template #caption>
            <slot name="title" :title="props.title">
                <template v-if="props.link">
                    <a :href="props.link" :title="props.title">
                        <Heading v-bind="props.config?.title" :class="computedClasses.title" v-if="props.title">{{ props.title }}</Heading>
                    </a>
                </template>
                <template v-else>
                    <Heading v-bind="props.config?.title" :class="computedClasses.title" v-if="props.title">{{ props.title }}</Heading>
                </template>
            </slot>
            <slot name="subtitle" :subtitle="props.subtitle">
                <Heading v-bind="props.config?.subtitle" :class="computedClasses.subtitle" v-if="props.subtitle">{{ props.subtitle }}</Heading>
            </slot>            
        </template>
        <template #content v-if="props.author || props.format || props.price || slots.content">            
            <slot name="author" :author="props.author">
                <p :class="computedClasses.author" v-if="props.author">{{ props.author }}</p>
            </slot>
            <slot name="format" :format="props.format">
                <p :class="computedClasses.format" v-if="props.format">{{ props.format }}</p>
            </slot>
            <slot name="price" :price="props.price">
                <div :class="computedClasses.price" v-if="props.price">
                    <p :class="computedClasses.priceRrp" v-if="props.price?.rrp">{{ props.price?.rrp?.label }} {{
                        props.price?.rrp?.value }}</p>
                    <p :class="computedClasses.priceSale" v-if="props.price?.sale">{{ props.price?.sale?.label }} {{
                        props.price?.sale?.value }}</p>
                </div>
            </slot>
            <slot name="availability"></slot>
            <slot name="content"></slot>
        </template>
        <template #ctas :ctas="[props.ctas, props.config?.ctaCover]">
            <slot name="ctas" :ctas="props.ctas" v-if="props.ctas">
                <template v-if="props.ctas && Array.isArray(props.ctas) && props.ctas.length > 0" :class="computedClasses.ctas">
                    <Button v-for="(cta, index) in props.ctas" :key="index" :label="cta.label" :href="cta.href" :color="cta.color ?? 'primary'" :inverted="cta.inverted" :type="cta.type ?? 'solid'" :size="cta.size" :modifier="cta.modifier" :classes="cta.classes" />
                </template>
                <template v-else-if="singleCta">
                    <Button :label="singleCta.label" :href="singleCta.href" :color="singleCta.color ?? 'primary'" :inverted="singleCta.inverted" :type="singleCta.type ?? 'solid'" :size="singleCta.size" :modifier="singleCta.modifier" :classes="{ base: [singleCta.classes?.base, {'tw:before:hidden': props.ctaCover}]}" />
                </template>
            </slot>
        </template>
    </Card>


</template>