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
      <LayoutGrid minColumnWidth="15" columnCount="6" type="grid">
        <template v-for="(product, index) in data" :key="index">

        <CardsImageWithInfo :link="`/Product/${contributor}/${hyphenateParam(product.product.raw.title as string)}`" :title="product.product.raw.title" :picture="{
          src: product.product.raw.prodImages[0]?.medium,
        }" :price="{
          rrp: {
            value: product.product.raw.price.toString()
          }
        }" :ctas="{
          label: 'Add to basket',
          href: '/',
          classes: {
            base: 'btn',
          },
        }" :classes="{
              card: 'tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:row-span-4 tw:flow--1',
              caption: 'tw:min-h-[2lh] tw:mt-cq-md',
              pictureImage: 'tw:object-contain tw:object-bottom tw:drop-shadow-lg',
              body: 'tw:contents',
              content: 'tw:contents',
              price: 'heading-lg fluid tw:text-primary',
              title: 'tw:line-clamp-2',
              ctas: 'tw:flow--cq-lg'
            }" :config="{
              mergeConfig: true,
              showAllSlots: false,
              ctaCover: false,
              title: {
                size: 'sm',
                color: 'primary'
              }
            }">
        </CardsImageWithInfo>
        </template>
      </LayoutGrid>
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
