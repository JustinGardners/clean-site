<script setup lang="ts">
import type { BasketItem } from '~/types';
useState<boolean>('loggedIn', () => true);
const basket = useState<BasketItem[]>('basket', () => []);

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <Button v-if="basket.length > 0" @click="basket = []" size="sm" type="outline" :classes="{
    base: 'tw:fixed tw:right-sm tw:bottom-sm'}">Clear basket</Button>
  </NuxtLayout>
</template>
