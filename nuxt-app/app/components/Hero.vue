<script setup lang="ts">
import { heroClasses } from '~/types/tokens'
import type { HeroProps } from '~/types'
import type { CardClasses } from '#layers/base/app/types'

const props = withDefaults(defineProps<HeroProps>(), {
    picture: () => ({ src: './storefront-hero.jpg' }),
    classes: () => ({
        card: 'tw:border-b-1 tw:border-b-[var(--field-border-color)]'
    })
})

const { finalConfig } = useComponentConfig<CardClasses, NonNullable<HeroProps['config']>>({
    componentName: 'hero',
    propConfig: () => props.config
})

const computedClasses = computed<HeroProps['classes']>(() => (
    componentClassMerge(props.classes || {}, heroClasses) as HeroProps['classes']
))

const excludeProps = ({ classes, ...rest }: HeroProps) => rest

</script>

<template>
    <Card v-bind="excludeProps(props)" :classes="computedClasses" :config="finalConfig" />
</template>
