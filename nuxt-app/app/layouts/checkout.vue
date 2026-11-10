<script setup lang="ts">

const { scopeClass } = useCheckout();

</script>

<template>
    <div id="backgroundClicker"></div>
    <div id="outerWrap">
        <div id="wrap">
            <PageCheckoutHeader />
            <main id="main-section">
                <!-- <slot /> -->

                <div class="container-md">
                    <div :class="'checkout ' + scopeClass" style="--label-stacked:true; --label-in-form:true;">
                        <div class="checkoutWrap">
                            <!-- checkout -->
                            <div id="checkout">

                                <!-- error messages -->
                                <div class="errorMessages">
                                </div>

                                <!-- Basket merge modal -->
                                <!-- <div id="basketMerge" class="basketMerge">
    <div class="basketMerge__wrap">

        <div id="basketMerge__inner" class="basketMerge__inner">


            <h2>New Items Added</h2><div>Thanks for signing in. Looks like you've already have some items in your basket. We've combined your new and old items.</div>
            <div class="validation-summary-valid" data-valmsg-summary="true"><ul><li style="display:none"></li>
</ul></div>

                
        <div class="basketMerge__images basketMerge__images--2">

<a class="jacket-Book" href="/product/telegraph-media-group-ltd/the-telegraph-all-new-big-book-of-cryptic-crosswords-7/19152514"><img alt="The Telegraph All New Big Book of Cryptic Crosswords 7 - Book" data-src="//tmg.dmmserver.com/media/356/97806006/9780600634430.jpg" id="img-19152514" src="//tmg.dmmserver.com/media/140/97806006/9780600634430.jpg" title="The Telegraph All New Big Book of Cryptic Crosswords 7 - Book"></a><a class="jacket-Book" href="/product/harriet-rix/the-genius-of-trees--how-trees-mastered-the-elements-and-shaped-the-world/31517696"><img alt="The Genius of Trees : How trees mastered the elements and shaped the world - Book" data-src="//tmg.dmmserver.com/media/356/97815299/9781529921267.jpg" id="img-31517696" src="//tmg.dmmserver.com/media/140/97815299/9781529921267.jpg" title="The Genius of Trees : How trees mastered the elements and shaped the world - Book"></a>        </div>
                
                <div class="basketMerge__buttons">
                    <div class="basket"><a href="https://books.telegraph.co.uk/basket">Review my basket</a></div>
                    <div class="continueShopping" id="mergeContinueShopping"><a href="javascript:void(0);" onclick="$(this).closest('#basketMerge').hide();">Continue</a></div>
                </div>

        </div>
    </div>
</div> -->
                                <slot />

                            </div>
                            <!-- @checkout-->
                        </div>
                        <!-- basket -->

                        <PageCheckoutSidebar />
                        <!-- @basket -->
                    </div>
                </div>


            </main>
            <PageFooter />
        </div>
    </div>

</template>