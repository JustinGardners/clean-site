<script setup lang="ts">

type Props = {
  imageSrc: string;
  productId: string;
  title: string;
  alt: string;
}

const { imageSrc, productId, title, alt } = defineProps<Props>()

</script>

<template>
  <div v-if="imageSrc" class="imageWrap">
    <div class="image">
      <div class="jacket jacket-Book">
        <img
          :alt
          class="productImage"
          data-zoom-image="//tmg.dmmserver.com/media/640/97802417/9780241743980.jpg"
          :id="`img-${productId}`"
          :src="imageSrc"
          :title
        />
      </div>
      <span class="availabilityFlash inStock"></span>
    </div>
  </div>
</template>
