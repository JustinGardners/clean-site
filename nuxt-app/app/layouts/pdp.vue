<script setup lang="ts">
import type { PdpLayoutVariation } from '~/types';

type LayoutVariation = {
  layout: PdpLayoutVariation;
} ;

const props = defineProps<LayoutVariation>();

const layout = computed(() => {
  const layoutVariation = props.layout || 'new';
  if(layoutVariation === 'new') {
    return 'new';
  } else if (layoutVariation === 'editorial') {
    return 'editorial';
  } else {
    return null;
  }
});

</script>

<template>
  <div id="outerWrap">
    <div id="wrap">
      <PageHeader />
      <main id="main-section">
        <div class="product-page" :style="layout ? {'--layout': layout} : null">
          <div id="body">
            <slot />
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  </div>

</template>
