<script setup lang="ts">
import type { BasketItem } from '~/types';

const basket = useState<BasketItem[]>('basket');

const basketTotal = computed(() => basket.value.reduce((total, item) => total + item.quantity, 0));
const basketAmount = computed(() => basket.value.reduce((total, item) => total + item.quantity * (item.price || 0), 0));
</script>

<template>
    <div id="miniBasket">
        <!-- basket total -->
        <div class="details">
            <a href="/basket">
                <span class="imageHolder"></span>
                <span id="uxSmallBasketQuantity"><span class="number">{{ basketTotal }}</span><span class="text"> items</span></span>
                <span id="uxSmallBasketTotal"><span class="number">£{{ basketAmount.toFixed(2) }}</span></span>
                <span class="basketText">Basket</span>
            </a>
            <p></p>
            <!--<span id="checkoutLink"><a href="https://books.telegraph.co.uk/Basket">Basket</a></span>-->
        </div>
        <!-- @ basket total -->
    </div>
</template>