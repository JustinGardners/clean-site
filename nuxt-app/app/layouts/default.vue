<script setup lang="ts">

const route = useRoute()

const checkoutRoute = route.path.includes('/checkout')

</script>

<template>
    <div id="backgroundClicker"></div>
    <div id="outerWrap">
        <div id="wrap">
            <PageCheckoutHeader v-if="checkoutRoute" />
            <PageHeader v-else />
            <main id="main-section">
                <slot />
            </main>
            <PageFooter />
        </div>
    </div>

</template>