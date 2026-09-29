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
  <!-- <pre>{{ data[0] }}</pre> -->
  <!-- <pre>{{ data[0].product.breadcrumbs }}</pre> -->
  <Breadcrumbs v-if="data && data.length > 0" :items="data[0]?.product.breadcrumbs" />
  <!-- <h1>Contributor: {{ contributor }}</h1>
    <p>Has productName: {{ productName }}</p> -->
  <article v-if="data && data.length > 0" class="pd-product">
    <section class="pd-product__column pd-product__column--image flow">
      <MainImage :title="data[0]?.product.raw.title || ''"
        :image-src="data[0]?.product.raw.prodImages[0]?.large || ''" />
      <div class="descriptionWrap flow">
        <Heading v-if="data[0]?.product.raw.storeFrontCatalogueDescription" size="lg" fluid color="primary">Description</Heading>
        <div v-html="data[0]?.product.raw.storeFrontCatalogueDescription" class="flow tw:max-w-prose"></div>
      </div>
    </section>
    <section class="pd-product__column pd-product__column--info flow">
      <div class="infoWrap flow">
        <Heading size="2xl" fluid color="primary">{{ data[0]?.product.raw.title }}</Heading>
        <p class="titleAuthorContributor titleAuthorContributor--authorContributor">by <a href="#">{{
          data[0]?.product.raw.contributor }}</a></p>
        <p class="product__title--series">{{ data[0]?.product.raw.series }}</p>
        <p class="product__title--format">{{ data[0]?.product.raw.format }}</p>
        <p v-if="data[0]?.product.raw.series" class="titleAuthorContributor titleAuthorContributor--series">Part of the
          {{ data[0]?.product.raw.series }} series</p>
        <p>{{ data.find((product) => product.product.raw.availability.includes("instock")) ? "In Stock - usually despatched within 24 hours" : "Not in Stock" }}</p>
        <p>{{ data[0]?.product.raw.productTypeDescription }}</p>
        <p class="product__sitePrice">£{{ data[0]?.product.raw.price }}</p>

        <Button size="lg" modifier="wide" class="infoWrap__add-btn">Add to basket</Button>
      </div>
      <div class="additionalInfoWrap flow">
        <Heading size="lg" fluid color="primary">Information</Heading>
        <dl class="flow">
          <dt>Format</dt>
          <dd>{{ data[0]?.product.raw.format }}</dd>
          <dt>Pages</dt>
          <dd>{{ Math.floor(Math.max(Math.min(Math.random() * 100, 100) * 10)) }}</dd>
          <dt>Publisher</dt>
          <dd>{{ data[0]?.product.raw.publisher }}</dd>
          <dt>Publication Date</dt>
          <dd>{{ data[0]?.product.raw.releaseDate ? new Date(data[0]?.product.raw.releaseDate).toLocaleDateString() :
            "N/A" }}</dd>
          <dt>Category</dt>
          <dd v-for="category in data[0]?.product.raw.bic2Codes" :key="category.code"><a :href="category.code">{{
            category.description }}</a></dd>
          <dt>ISBN</dt>
          <dd>{{ data[0]?.product.raw.productCode }}</dd>
        </dl>
      </div>
      <div class="otherFormatsWrap flow tw:[--details-inline-size:100%] tw:@container"
        v-if="data[0]?.product?.raw?.isAlternativeFormatsEnabled && data[0]?.product?.raw?.alternativeFormats?.length > 0">
        <Heading size="lg" fluid color="primary" class="product__title--format-alt">Other formats available</Heading>
        <div class="tw:*:not-first:border-t tw:*:border-t-[var(--field-border-color)]">
          <template v-for="(format, index) in data[0]?.product?.raw?.alternativeFormats" :key="index">
          <Collapse :title="`${format.format} from £${format.price}`" :config="{title: {size: 'sm'}, markerPosition: 'end'}" :classes="{'collapse_title': 'tw:py-[var(--text-frame-y)]'}">
            <template #content>
              <CardsImageWithInfo 
                link="/" :title="format.title" :picture="{
                  src: format.imageLocation,
                }" :price="{
            rrp: {
              value: `£${format.price.toString()}`
            }
          }" :ctas="{
            label: 'Add to basket',
            href: '/',
            size: 'sm',
            classes: {
              base: 'btn',
            },
          }" :classes="{
            card: 'tw:[--card-picture-aspect:2/3] tw:flow--1 tw:[--card-left-col:min(90px,max(90px,100%))]',
            picture: 'tw:*:w-[min(90px,max(90px,100%))]',
            pictureImage: 'tw:object-contain tw:object-bottom tw:drop-shadow-lg tw:object-contain',          
            price: 'heading-default fluid tw:text-primary',
            title: 'tw:line-clamp-2',
            ctas: 'tw:flow--cq-lg'
          }" :config="{
                fixedLayout: 'col',
                mergeConfig: true,
                showAllSlots: false,
                ctaCover: false,
                title: {
                  size: 'sm',
                  color: 'primary'
                }
              }" />            
            </template>
          </Collapse>
          </template>        
        </div>

      </div>

    </section>
  </article>


  <!-- <pre>{{ data }}</pre> -->
  <!-- <div class="tw:grid tw:grid-cols-6">
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
        </div> -->

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>
  <div v-else>
    <p>No product of this name found.</p>
  </div>


</template>
