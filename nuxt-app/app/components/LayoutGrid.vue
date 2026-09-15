<script setup lang="ts">
import type { FrameworkSpacing } from '~/types/index'
export type LayoutGridProps = {
    type?: 'grid' | 'flex',
    columns?: number,
    columnGap?: FrameworkSpacing,
    minColumnWidth?: '5' | '10' | '15' | '20' | '25' | number;
    minColumnWidthUnit?: 'px' | 'ch' | 'rem' | 'em'
}

const { type, columns, columnGap, minColumnWidth, minColumnWidthUnit = 'ch' } = defineProps<LayoutGridProps>() 

const slots = useSlots()
const attrs = useAttrs()

const classes = computed(() => attrs.class ?? '')

const layoutClass = computed(() => {
    if((slots.default?.length || 0) % 2 === 0 && (!type)) {
        return 'flex-layout-grid'
    } else if(type) {
        return type === 'flex' ? 'flex-layout-grid' : 'layout-grid'
    } else {
        return 'layout-grid'
    }
})

const minWidth = computed(() => {
    if(columns) {
        const minWidth = (() => {
            switch (minColumnWidth) {
                case '5':
                    return 'tw:layout-column-min-5'
                case '10':
                    return 'tw:layout-column-min-10'
                case '15':
                    return 'tw:layout-column-min-15'
                case '20':
                    return 'tw:layout-column-min-20'
                case '25':
                    return 'tw:layout-column-min-25'
                default:
                    return ''
            }
        })()
        return minWidth
    }
})

const minWidthUnit = computed(() => {
    return minColumnWidthUnit !== 'ch' ? `1${minColumnWidthUnit}` : null
})

const minColumnWidthClass = computed(() => {
    if(minColumnWidth) {
        return `tw:[--layout-column-min:${minColumnWidth}${minColumnWidthUnit}]`
    }
})

const columnGapClass = computed(() => {
    const gap = (() => {
        switch (columnGap) {
            case 'sm':
                return 'tw:layout-gap-sm'
            case 'md':
                return 'tw:layout-gap-md'
            case 'lg':
                return 'tw:layout-gap-lg'
            case 'xl':
                return 'tw:layout-gap-xl'
            case '2xl':
                return 'tw:layout-gap-2xl'
            case '3xl':
                return 'tw:layout-gap-3xl'
            case '4xl':
                return 'tw:layout-gap-4xl'
            case '5xl':
                return 'tw:layout-gap-5xl'
            case '6xl':
                return 'tw:layout-gap-6xl'
            default:
                return ''
        }
    })()
    return gap
}) 

</script>

<template>
<div :style="`--layout-column-unit: ${minWidthUnit ?? '1ch'}`" :class="cn([layoutClass, minWidth, columnGapClass, minColumnWidthClass], classes)">
    <slot />
</div>
</template>