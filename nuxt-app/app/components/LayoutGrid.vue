<script setup lang="ts">
import type { FrameworkSpacing } from '~/types/index'
export type LayoutGridProps = {
    type?: 'grid' | 'flex',
    columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    columnGap?: FrameworkSpacing,
    minColumnWidth?: '5' | '10' | '15' | '20' | '25' | number;
    minColumnWidthUnit?: 'px' | 'ch' | 'rem' | 'em';
    autoRepeat?: 'fit' | 'fill';
}

const { type, columns, columnGap, minColumnWidth, minColumnWidthUnit = 'ch', autoRepeat } = defineProps<LayoutGridProps>() 

const slots = useSlots()
const attrs = useAttrs()

const classes = computed(() => attrs.class ?? '') // maybe revert back to prop for dynamic resolutions???

const layoutClass = computed(() => {
    if((slots.default?.length || 0) % 2 === 0 && (!type)) {
        return 'flex-layout-grid'
    } else if(type) {
        return type === 'flex' ? 'flex-layout-grid' : 'layout-grid'
    } else {
        return 'layout-grid'
    }
})

const autoRepeatClass = computed(() => {
    if(autoRepeat) {
        return autoRepeat === 'fill' ? `tw:[--layout-grid-auto-repeat:auto-fill]`: ''
    }
})

const noOfColumns = computed(() => {
    if(columns && layoutClass.value === 'layout-grid') {
        const noOfCols = (() => {
            switch (columns) {
                case 1:
                    return `tw:column-count-1`
                    break;
                case 2:
                    return `tw:column-count-2`
                    break;
                case 3:
                    return `tw:column-count-3`
                    break;
                case 4:
                    return `tw:@xl:column-count-4`
                    break;
                case 5:
                    return `tw:@xl:column-count-5`
                    break;
                case 6:
                    return `tw:column-count-3 tw:@2xl:column-count-6`
                    break;
                case 7:
                    return `tw:column-count-3 tw:@2xl:column-count-7`
                    break;
                case 8:
                    return `tw:column-count-2 tw:@2xl:column-count-4 tw:@4xl:column-count-8`
                    break;
                case 9:
                    return `tw:@3xl:column-count-9`
                    break;
                case 10:
                    return `tw:@3xl:column-count-10`
                    break;
                case 11:
                    return `tw:@3xl:column-count-11`
                    break;
                case 12:
                    return `tw:@3xl:column-count-12`
                    break;
            
                default:
                    break;
            }
        })()
        return `layout-grid--column-count ${noOfCols}`
    }
    return null
})

const minWidth = computed(() => {
    if(minColumnWidth) {
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
<div :style="`--layout-column-unit: ${minWidthUnit ?? '1ch'}`" :class="cn([layoutClass, minWidth, columnGapClass, minColumnWidthClass, noOfColumns, autoRepeatClass], classes)">
    <slot />
</div>
</template>