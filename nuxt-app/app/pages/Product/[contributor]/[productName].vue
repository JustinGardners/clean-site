<script setup lang="ts">
import MainImage from "~/components/pdp/MainImage.vue";

const route = useRoute();
const contributor = route.params.contributor;
const productName = route.params.productName;

const { data, error } = await useFetch("/api/test-products", {
  method: "GET",
  params: {
    contributor,
    productName,
  },
});

definePageMeta({
  layout: "pdp",
});

</script>

<template>
  <!-- <pre>{{ data[0]?.product.raw }}</pre> -->
  <h1>PDP</h1>
  <MainImage :title="data[0]?.product.raw.title || ''" :image-src="data[0]?.product.raw.prodImages[0]?.large || ''" />
    
    <div class="tw:container tw:mx-auto">
      <!-- <h1>Contributor: {{ contributor }}</h1>
    <p>Has productName: {{ productName }}</p> -->
      <div v-if="data && data.length > 0">
        <!-- <pre>{{ data }}</pre> -->
        <div class="tw:grid tw:grid-cols-6">
          <template v-for="(product, index) in data" :key="index">
            <article>
              <picture>
                <img
                  :src="product.product.raw.prodImages[0]?.large"
                  alt="Product Image"
                />
              </picture>
              <h2>{{ product.product.raw.title }}</h2>
              <p>{{ product.product.raw.productTypeDescription }}</p>
              <p>£{{ product.product.raw.price }}</p>
            </article>
          </template>
        </div>
      </div>
      <div v-else-if="error">
        <p>Error: {{ error }}</p>
      </div>
      <div v-else>
        <p>No product of this name found.</p>
      </div>
    </div>

</template>
