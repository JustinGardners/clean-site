<script setup lang="ts">

const props = defineProps<{
    item: any
}>()

</script>

<template>
                    <!-- <div class="search-item search-item--inStock">
            <div class="search-item__wrap">
                <div class="search-item__image"><a class="jacket-Book"
                        href="/product/j-priestley/an-inspector-calls/1006847"><img alt="An Inspector Calls - Book"
                            class="img-fluid" data-src="//tmg.dmmserver.com/media/356/97804352/9780435232825.jpg"
                            id="img-1006847" src="//tmg.dmmserver.com/media/140/97804352/9780435232825.jpg"
                            title="An Inspector Calls - Book"></a></div>
                <div class="search-item__info">
                    <div class="search-item__name">
                        <h3 class="search-item__title"><a href="/product/j-priestley/an-inspector-calls/1006847"
                                id="tit-1006847">An Inspector Calls</a></h3>

                        <h4 class="search-item__contributor"><a href="/Search?Author=J.+Priestley">J. Priestley</a></h4>
                        <div class="search-item__availability">
                            <p class="availabilityLink inStock">In Stock<span> - usually despatched within 24
                                    hours</span></p>
                        </div>
                        <p class="search-item__format search-item__format--top">Format: <span>Book (Hardback)</span></p>
                    </div>
                </div>
                <div class="search-item__purchase">
                    <div class="search-item__purchase-wrap">
                        <div class="search-item__purchase-inner">




                            <p class="price search-item__purchase-price">£9.99</p>

                            <span class="search-item__purchase-availability">
                                <p class="availabilityLink inStock">In Stock<span> - usually despatched within 24
                                        hours</span></p>
                            </span>
                            <p class="search-item__purchase-format"><span>Book (Hardback)</span></p>


                            <a class="button btn inStock buyBook buyButton" data-net-price="9.9900"
                                data-product-code="9780435232825" data-product-id="1006847" data-product-type="Book"
                                data-productid="1006847" data-short-title="An Inspector Calls" href="javascript:void(0)"
                                rel="nofollow">Add to basket</a>


                            <span class="deliveryText"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

    <CardsImageWithInfo
        :link="`/Product/${hyphenateParam(item.product.raw.contributor)}/${hyphenateParam(item.product.raw.title)}`"
        :title="item.product.raw.title"
        :picture="{ src: item.product.raw.prodImages[0]?.medium || item.product.raw.imageLocation }"
        :price="{ rrp: { value: item.product.raw.price.toString() } }" :classes="{
            card: 'tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:row-span-4 tw:flow--1',
            pictureImage: 'tw:object-contain tw:object-bottom tw:drop-shadow-lg',
            body: 'tw:contents',
            content: 'tw:contents',
            caption: 'tw:mt-sm',
            price: 'heading-default fluid tw:text-primary',
            title: 'tw:line-clamp-2'
        }"
        :config="{ mergeConfig: true, title: { size: 'sm' }, showAllSlots: false, ctaCover: false, fixedLayout: 'row' }" />
</template>