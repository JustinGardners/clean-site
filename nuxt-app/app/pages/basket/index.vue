<script setup lang="ts">

const productsInBasket = useState('basket');

</script>

<template>
    <div class="container-md">

        <div id="basket">
            <h2>Your Basket</h2>


            <!-- error messages -->
            <!-- @error messages -->

            <div id="mainBasket">
                <div class="validation-summary-valid" data-valmsg-summary="true">
                    <ul>
                        <li style="display:none"></li>
                    </ul>
                </div>

                <!-- basket details -->
                <form action="/basket/update" id="updateBasketForm" method="post"><input
                        name="__RequestVerificationToken" type="hidden"
                        value="etydIU3pBHGbfCUz3Yz6RhRwQxHiUEQqFbnynXTCdf9qJneuLRSDFjwIv7jnDNkgVZfoIkCpSeSBtbuIBdTZGydtWLQ1">
                    <div id="basketTable">
                        <div id="basketHeader" class="row">
                            <div class="itemCover"></div>
                            <div class="itemInfo">Product</div>
                            <div class="itemFormat">Format</div>
                            <div class="itemStatus">Availability</div>
                            <div class="itemPrice">Price</div>
                            <div class="itemQuantity">Qty</div>
                            <div class="itemSubtotal">Subtotal</div>
                        </div>

                        <div id="basketBody">
                            <!-- <template>
                                <div v-for="product in productsInBasket" :key="product.id" class="row item item-{{ product.code }}">
                                    <div class="itemCover">
                                        <a :href="`/product/${product.code}`"><img
                                            :alt="product.name"
                                            :data-src="product.image"
                                            :id="`img-${product.id}`"
                                            :src="product.image">
                                        </a>
                                    </div>
                                    <div class="itemInfo">{{ product.name }}</div>
                                    <div class="itemFormat">{{ product.format }}</div>
                                    <div class="itemStatus">{{ product.availability }}</div>
                                    <div class="itemPrice">{{ product.price }}</div>
                                    <div class="itemQuantity">{{ product.quantity }}</div>
                                    <div class="itemSubtotal">{{ product.subtotal }}</div>
                                </div>
                            </template> -->
                            <div class="row item item-9781529921267 ">
                                <input id="BasketDetails_1__BasketDetailId" name="BasketDetails[1].BasketDetailId"
                                    type="hidden" value="7169119">
                                <input id="BasketDetails_1__ProductCode" name="BasketDetails[1].ProductCode"
                                    type="hidden" value="9781529921267">
                                <input id="BasketDetails_1__ProductIsLimitedStock"
                                    name="BasketDetails[1].ProductIsLimitedStock" type="hidden" value="False">
                                <input id="BasketDetails_1__ProductStockUnits" name="BasketDetails[1].ProductStockUnits"
                                    type="hidden" value="301">

                                <div class="itemCover">
                                    <a class="jacket-Book"
                                        href="/product/harriet-rix/the-genius-of-trees--how-trees-mastered-the-elements-and-shaped-the-world/31517696"><img
                                            alt="The Genius of Trees : How trees mastered the elements and shaped the world - Book"
                                            data-src="//tmg.dmmserver.com/media/356/97815299/9781529921267.jpg"
                                            id="img-31517696"
                                            src="//tmg.dmmserver.com/media/140/97815299/9781529921267.jpg"
                                            title="The Genius of Trees : How trees mastered the elements and shaped the world - Book"></a>
                                </div>
                                <div class="itemInfo">
                                    <h3><a
                                            href="/product/harriet-rix/the-genius-of-trees--how-trees-mastered-the-elements-and-shaped-the-world/31517696">The
                                            Genius of Trees : How trees mastered the elements and shaped the world</a>
                                    </h3>

                                    <div></div>

                                </div>


                                <div class="itemFormat">
                                    <p class="productFormat">
                                        Book - Paperback / softback
                                    </p>


                                </div>


                                <div class="itemStatus">
                                    <div class="stock">
                                        <a class="availabilityLink inStock" href="javascript:void(0)" data-info="">
                                            In Stock<span> - usually despatched within 24 hours</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="itemPrice">
                                    <div class="productPrice">
                                        £12.99
                                    </div>
                                </div>

                                <div class="itemQuantity">
                                    <div class="quantityTotal">
                                        <input class="basket-quantity-type" id="BasketDetails_1__Quantity" max="99"
                                            min="1" name="BasketDetails[1].Quantity" type="number" value="1"><br>
                                        <input type="button" value="Update" class="btn basket-check">
                                        <p class="removeItem"><a
                                                href="/basket/removeitem?basketDetailId=7169119"><span>Remove
                                                    Item</span></a></p>

                    
                                    </div>
                                </div>

                                <div class="itemSubtotal">
                                    <div class="linePrice">£12.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form> <!-- basket details -->
                <div id="basketSummaryArea">
                    <!-- sub totals -->
                    <div id="basketSubTotals" data-producttotal="70.0000">

                        <span class="summaryHeader"></span>




                        <!-- delivery costs -->
                        <div id="deliveryCosts">
                            <h6>Standard United Kingdom delivery: <span class="stdDeliveryPrice">Free</span></h6>

                            <p class="preview"><a id="previewAll" href="javascript:void(0)">Preview all delivery options
                                    <span class="downArrowHead">▼</span></a></p>
                            <div id="basketDeliveryCosts" style="display:none;">
                                <div id="basketDeliveryCostsTableWrapper">
                                    <div class="deliveryOption">
                                        <div><span class="deliveryOptionTitle"
                                                data-deliverytitle="Standard">Standard:</span> <span
                                                class="deliveryOptionPrice" data-price="0.0000">Free</span></div>
                                        <div><span class="deliveryOptionDescription">Estimated delivery within 5 working
                                                days</span></div>
                                    </div>
                                    <div class="deliveryOption">
                                        <div><span class="deliveryOptionTitle"
                                                data-deliverytitle="Premium">Premium:</span> <span
                                                class="deliveryOptionPrice" data-price="7.5000">£7.50</span></div>
                                        <div><span class="deliveryOptionDescription">Estimated delivery within 2 working
                                                days</span></div>
                                    </div>
                                    <div class="deliveryOption">
                                        <div><span class="deliveryOptionTitle"
                                                data-deliverytitle="Premium + Signature">Premium + Signature:</span>
                                            <span class="deliveryOptionPrice" data-price="7.5000">£7.50</span>
                                        </div>
                                        <div><span class="deliveryOptionDescription">Estimated delivery next working day
                                                if ordered before 2pm</span></div>
                                    </div>

                                </div>
                                <p class="deliveryInfo">Please note: You can change your delivery option during checkout
                                </p>
                            </div>
                        </div>
                        <!-- @delivery costs -->
                        <!-- discounts -->
                        <p class="total">Total: <span class="totalPrice">£70.00</span></p>
                        <!-- @discounts -->
                        <!-- restrictions warnings -->



                        <p class="customisableBookWarning"><span class="customisableBookIcon"></span>Custom Items are
                            printed to order and are charged when the order is placed and cannot be cancelled</p>

                        <!-- @restrictions warnings -->
                        <!-- coupons -->
                        <div id="basketCoupons">

                            <form action="/basket/applycoupon" method="post">
                                <div class="form-group couponCode">
                                    <label for="CouponCode">Do you have a promotional code?</label>
                                    <input class="form-control" id="CouponCode" name="CouponCode" type="text" value="">
                                    <input type="submit" id="btnApplyCoupon" class="btn" value="Apply">
                                </div>
                            </form>



                        </div>
                        <!-- @coupons -->
                        <!-- navigation buttons -->
                        <div class="basketOptions">
                            <span class="continueShopping"><a href="/">Continue Shopping</a></span>
                            <span class="checkout"><a class="btn btn-primary"
                                    href="https://books.telegraph.co.uk/account/logoncheckout"
                                    id="basket-continue-button">Checkout Now</a></span>
                        </div>

                    </div>
                    <!-- @sub totals -->



                </div>
                <!-- @navigation buttons -->
            </div>

        </div>


    </div>
</template>