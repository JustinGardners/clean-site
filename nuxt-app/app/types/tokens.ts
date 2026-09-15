export const frameworkSpacing = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] as const
export const sectionGapName = 'section-gap' as const
export const sectionSpacing = ['default', 'lg', 'xl', '2xl', '3xl'] as const

export const itemWithInfoClasses = {
    card: 'product-item',  
    picture: 'product-item__picture',
    author: 'product-item__author',
    format: 'product-item__format',
    price: 'product-item__price',
    priceRrp: 'product-item__price__rrp',
    priceSale: 'product-item__price__sale',
} as const