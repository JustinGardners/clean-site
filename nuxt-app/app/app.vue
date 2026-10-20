<script setup lang="ts">
import type { BasketItem } from '~/types';
useState<boolean>('loggedIn', () => true);
useState<BasketItem[]>('basket', () => []);

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
