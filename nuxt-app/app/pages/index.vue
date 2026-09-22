<script setup lang="ts">
import ImageWithInfo from "~/components/cards/ImageWithInfo.vue";
import { colourClasses, colorPrimaryRangeClasses, colorSecondaryRangeClasses, colorGreyRangeClasses, colorTertiaryRangeClasses } from "~/data/colorTailwindClasses";

</script>

<template>
  <!-- <section class="wrapper tw:bg-primary-0">
    <h2 class="tw:flex tw:text-display-lg">AlpineJS test</h2>
    <div x-data="counter">
      <p
        x-text="count"
        class="tw:text-display-lg tw:aspect-square tw:min-size-[1em] tw:bg-primary tw:text-primary-contrast tw:rounded-full tw:grid tw:place-content-center tw:p-xl tw:max-w-fit tw:aspect-square"
      ></p>
      <button x-on:click="count++">Increment</button>
    </div>
  </section> -->

  <section class="wrapper">
    <div class="tw:[--layout-column-min:10ch]">
      <div class="layout-grid">
        <CardsCircleImageWithInfo
          :link="'/'"
          title="New Releases"
          shadow="lg"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Newreleases.png&amp;width=348&amp;padding=false',
          }"
          :config="{
            title: {
              fluid: true
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Bestsellers"
          shadow="lg"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Childrenbooks.png&width=348&padding=false',
          }"
          :config="{
            title: {
              fluid: true
            }
          }"          
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Fiction Books"
          shadow="lg"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Fictionbooks.png&width=348&padding=false',
          }"
          :config="{
            title: {
              fluid: true
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Non Fiction"
          shadow="lg"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false',
          }"
          :config="{
            title: {
              fluid: true
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Non Fiction"
          shadow="lg"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false',
          }"
          :config="{
            title: {
              fluid: true
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Non Fiction"
          shadow="lg"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false',
          }"
          :config="{
            title: {
              fluid: true
            }
          }"
        />                
      </div>
    </div>
  </section>

</template>
