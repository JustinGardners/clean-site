<script setup lang="ts">
import type { BasketItem } from '~/types';

const productsInBasket = useState<BasketItem[]>('basket', () => []);
const quantityInputs = reactive<Record<string, number>>({});

const { data: testProducts } = await useAsyncData(
  'test-products',
  () => $fetch('/api/test-products')
);

const basketProductIds = computed(
  () => new Set(productsInBasket.value.map(item => String(item.productId)))
);

const basketProducts = computed(() =>
  (testProducts.value ?? []).filter(product =>
    basketProductIds.value.has(String(product.product.raw.productId))
  )
);

const getQuantity = (productId: string) => {
  const item = productsInBasket.value.find(item => String(item.productId) === String(productId));
  return item?.quantity ?? 0;
};

const removeFromBasket = (productId: string) => {
  const index = productsInBasket.value.findIndex(item => String(item.productId) === String(productId));
  if (index !== -1) {
    productsInBasket.value.splice(index, 1);
  }
};

const updateQuantity = (productId: string) => {
  const requestedQuantity = quantityInputs[productId] ?? getQuantity(productId);
  const quantity = requestedQuantity > 0 ? requestedQuantity : 1;
    console.log(`Updating quantity for productId: ${productId} to ${quantity}`);
  const item = productsInBasket.value.find(item => String(item.productId) === String(productId));
  if (item) {
    item.quantity = quantity;
  }
};

const setQuantityInput = (productId: string, event: Event) => {
  const input = event.target;
  if (input instanceof HTMLInputElement) {
    quantityInputs[productId] = Number(input.value);
  }
};

</script>

<template>
    <!-- <details>
        <summary>Basket Details</summary>
        <pre>{{ basketProducts }}</pre>        
    </details> -->
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
                            <div
                                v-for="product in basketProducts"
                                :key="product.product.raw.productId"
                                class="row"
                            >
                                <div class="itemCover">
                                    <a :href="`/Product/${hyphenateParam(product.product.raw.contributor)}/${hyphenateParam(product.product.raw.title)}`">
                                        <img
                                            v-if="product.product.raw.prodImages?.[0]?.small || product.product.raw.imageLocation"
                                            :src="product.product.raw.prodImages?.[0]?.small || product.product.raw.imageLocation"
                                            :alt="product.product.raw.title"
                                            :data-src="product.product.raw.prodImages?.[0]?.small || product.product.raw.imageLocation"
                                            :id="`img-${product.product.raw.productId}`"
                                        >
                                    </a>
                                </div>
                                <div class="itemInfo">
                                    <a :href="`/Product/${hyphenateParam(product.product.raw.contributor)}/${hyphenateParam(product.product.raw.title)}`">
                                        <h3>
                                            {{ product.product.raw.title }}
                                        </h3>
                                    </a>
                                </div>
                                <div class="itemFormat">
                                    {{ product.product.raw.format }}
                                </div>
                                <div class="itemStatus">
                                    {{ product.product.raw.availability.includes("instock") ? "In Stock - usually despatched within 24 hours" : "Not in Stock" }}
                                    <!-- {{ product.product.raw.availability.map(status => status).join(', ') }} -->
                                </div>
                                <div class="itemPrice">
                                    £{{ product.product.raw.price }}                            
                                </div>
                                <div class="itemQuantity">
                                    <div class="quantityTotal">
                                        <input class="basket-quantity-type" :id="`BasketDetails_1__Quantity_${product.product.raw.productId}`" max="99"
                                            min="1" :name="`BasketDetails[1].Quantity`" type="number" :value="quantityInputs[String(product.product.raw.productId)] ?? getQuantity(String(product.product.raw.productId))" @input="setQuantityInput(String(product.product.raw.productId), $event)"><br>
                                        <input type="button" value="Update" @click.prevent="updateQuantity(String(product.product.raw.productId))" class="btn basket-check">
                                        <p class="removeItem"><a
                                                href="#" @click.prevent="removeFromBasket(String(product.product.raw.productId))"><span>Remove
                                                    Item</span></a></p>

                    
                                    </div>
                                </div>    
                               <div class="itemSubtotal">
                                    <div class="linePrice">£{{product.product.raw.price * getQuantity(String(product.product.raw.productId))}}</div>
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
                                    href="/checkout"
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