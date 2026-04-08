<script setup lang="ts">

type Props = {
  imageSrc?: string;
  dataZoomImage?: string;
  productId?: string;
  title?: string;
  alt?: string;
}

const { imageSrc, productId, title, alt, dataZoomImage } = defineProps<Props>()

</script>

<template>
  <div class="imageWrap">
    <div class="image">
      <div class="jacket jacket-Book">
        <img
          v-if="imageSrc"
          :alt
          class="productImage"
          :data-zoom-image="dataZoomImage"
          :id="`img-${productId}`"
          :src="imageSrc"
          :title
        />
      </div>
      <span class="availabilityFlash inStock"></span>
    </div>
  </div>
</template>
