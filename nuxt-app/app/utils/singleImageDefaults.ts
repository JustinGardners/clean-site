import type { CardImageProps } from '~/types'

export const singleImageDefaults = {
    picture: () => ({
        src: 'http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&height=240&padding=false',
        alt: 'Placeholder image'
    }),
    roundedImage: 'default'
} satisfies Partial<CardImageProps>