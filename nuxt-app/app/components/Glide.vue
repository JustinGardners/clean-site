<script setup lang="ts">
import { Fragment, type VNode } from 'vue'

type GlideProps = {
    bullets?: boolean
    controls?: boolean
}

const { bullets = true, controls = true } = defineProps<GlideProps>();

const slots = useSlots();

const flattenSlides = (nodes: VNode[]): VNode[] => {
    return nodes.flatMap((node) => {
        if (node.type === Fragment && Array.isArray(node.children)) {
            return flattenSlides(node.children as VNode[])
        }

        return [node]
    })
}

const slides = computed(() => {
    return flattenSlides(slots.default?.() ?? []);
});

</script>

<template>
    <ClientOnly>
        <div class="glide">
            <div class="glide__track" data-glide-el="track">
                <div class="glide__slides">
                    <slot />
                </div>
            </div>
            <slot name="controls" v-if="controls">
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
            </slot>
            <div class="glide__bullets" data-glide-el="controls[nav]" v-if="bullets">
                <template v-if="slides.length > 0">
                    <slot name="bullets">
                        <button v-for="i in slides.length" :key="i" class="glide__bullet" :data-glide-dir="'=' + (i - 1)"></button>
                    </slot>
                </template>
            </div>
        </div>
    </ClientOnly>
</template>