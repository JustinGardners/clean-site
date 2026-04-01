<script setup lang="ts">

const route = useRoute()
const contributor = route.params.contributor

const { data, error } = await useFetch("/api/test-products", {
  method: "GET",
  params: {
    contributor,
  },
});

// const { data, error } = await useFetch("/api/test-products")
</script>

<template>
  <div class="tw:container tw:mx-auto">
    <!-- <h1>Contributor: {{ contributor }}</h1> -->
    <div v-if="data">
      <div class="tw:grid tw:grid-cols-6">
        <template v-for="(product, index) in data" :key="index">
          <article>
            <a :href="`/Product/${contributor}/${hyphenateParam(product.product.raw.title as string)}`">
            <picture>
              <img
                :src="product.product.raw.prodImages[0]?.large"
                alt="Product Image"
              />
            </picture>
            <h2>{{ product.product.raw.title }}</h2>
            <p>{{ product.product.raw.productTypeDescription }}</p>
            <p>£{{ product.product.raw.price }}</p>
            </a>
          </article>
        </template>
      </div>
            <!-- <pre>{{ data }}</pre> -->
    </div>
    <div v-else-if="error">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
