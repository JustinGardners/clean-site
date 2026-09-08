import type {
    CardImageProps,
    ImageWithInfoClassMap,
    ImageWithInfoProps,
    ImageWithInfoResolvedClasses
} from '~/types'
import { itemWithInfoClasses } from '~/types/tokens'

type ProductImageProps = CardImageProps | ImageWithInfoProps

export default function useProductImage(props: ProductImageProps) {
    const { css, renderPicture } = useCard(props)

    const roundedImage = computed(() => {
        switch (props.roundedImage) {
            case 'none':
                return ''
            case 'sm':
                return 'tw:rounded-sm'
            case 'md':
                return 'tw:rounded-md'
            case 'lg':
                return 'tw:rounded-lg'
            case 'full':
                return 'tw:rounded-full'
            case 'default':
            default:
                return 'tw:rounded'
        }
    })

    const computedClasses = computed<ImageWithInfoResolvedClasses>(() => (
        componentClassMerge(css.value, itemWithInfoClasses) as ImageWithInfoResolvedClasses
    ))

    const cardClasses = computed<ImageWithInfoClassMap>(() => (
        componentClassMerge(
            itemWithInfoClasses,
            (props.classes ?? {}) as Partial<typeof itemWithInfoClasses>
        ) as ImageWithInfoClassMap
    ))

    const singleCta = computed(() => {
        const ctas = 'ctas' in props ? props.ctas : undefined
        return Array.isArray(ctas) ? undefined : ctas
    })

    return {
        css,
        renderPicture,
        roundedImage,
        computedClasses,
        cardClasses,
        singleCta
    }
}