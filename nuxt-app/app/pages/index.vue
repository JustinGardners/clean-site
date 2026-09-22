<script setup lang="ts">

// Dummy products with no strict type right now
const popularRightNowProducts = [{
  title: "A Thousand Feasts",
  price: 22.99,
  prodImages: [{
    medium: '/heated-rivialry.png'
  }]
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/birds.png'
  }]
},
{
  title: "Pinch of Nom Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/court-of-thorns.png'
  }]
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/releasing-10.png'
  }]
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/salads.png'
  }]
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/yesteryear.png'
  }]
}]

const populateProductArray = (count: number) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      title: i < popularRightNowProducts.length ? popularRightNowProducts[i]?.title : `Product ${i + 1}`,
      price: 22.99,
      prodImages: [{
        medium: i < popularRightNowProducts.length ? popularRightNowProducts[i]?.prodImages[0]?.medium : '/heated-rivialry.png'
      }]
    });
  }
  return products;
};

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

  <Block paddingY="xl">
      <LayoutGrid minColumnWidth="15" type="grid" class="tw:[--card-top-row:100cqi]">
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Crime &amp; Thriller"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Newreleases.png&amp;width=348&amp;padding=false',
          }"
          :classes="{
            body: 'tw:px-0 tw:justify-center'
          }"
          :config="{
            showAllSlots: false,
            title: {
              fluid: true,
              size: 'default'
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Mystery &amp; Suspense"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Childrenbooks.png&width=348&padding=false',
          }"
          :classes="{
            body: 'tw:px-0 tw:justify-center'
          }"          
          :config="{
            showAllSlots: false,
            title: {
              fluid: true
            }
          }"          
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Psychological Thriller"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Fictionbooks.png&width=348&padding=false',
          }"
          :classes="{
            body: 'tw:px-0 tw:justify-center'
          }"          
          :config="{
            showAllSlots: false,
            title: {
              fluid: true
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Detective Fiction"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false',
          }"
          :classes="{
            body: 'tw:px-0 tw:justify-center'
          }"          
          :config="{
            showAllSlots: false,
            title: {
              fluid: true
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Legal Thriller"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false',
          }"
          :classes="{
            body: 'tw:px-0 tw:justify-center'
          }"          
          :config="{
            showAllSlots: false,
            title: {
              fluid: true
            }
          }"
        />
        <CardsCircleImageWithInfo
          :link="'/'"
          title="Noir Fiction"
          :bordered="true"
          :picture="{
            src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false',
          }"
          :classes="{
            body: 'tw:px-0 tw:justify-center'
          }"          
          :config="{
            showAllSlots: false,
            title: {
              fluid: true
            }
          }"
        />                
      </LayoutGrid>
  </Block>
  <Block class="flow">
    <Heading size="xl">
      Popular Right Now
    </Heading>
    
      <LayoutGrid minColumnWidth="15" columnCount="6" type="grid">
        <template v-for="(product, i) in popularRightNowProducts" :key="i">
          <CardsImageWithInfo
            link="/"
            :title="product.title"
            :picture="{
              src: product.prodImages[0]?.medium
            }"
            :price="{rrp: {
              value: product.price.toString()
            } }"
            :ctas="{
              label: 'Add to basket',
              href: '/',
              classes: {
                base: 'btn',
              },
            }"
            :classes="{
              card: 'tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:row-span-4 tw:flow--1',
              caption: 'tw:min-h-[1.5lh] tw:mt-cq-md',
              picture: 'tw:shadow-lg',
              body: 'tw:contents',
              content: 'tw:contents',
              price: 'heading-lg fluid tw:text-primary',
              ctas: 'tw:flow--cq-lg'
            }"
            :config="{
              mergeConfig: true,
              showAllSlots: false,
              ctaCover: false,
              title: {
                size: 'sm',
                color: 'primary'
              }
            }"
          >
          </CardsImageWithInfo>
        </template>        
      </LayoutGrid>
  </Block> 
  <Block class="flow" paddingY="2xl">
    <Heading size="xl">
      Popular Right Now
    </Heading>
    
      <LayoutGrid type="grid" minColumnWidth="5" :columns="8">
        <template v-for="(product, i) in populateProductArray(8)" :key="i">
          <CardsImageWithInfo
            link="/"
            :title="product.title || ''"
            :picture="{
              src: product.prodImages[0]?.medium
            }"
            :price="{rrp: {
              value: product.price.toString()
            } }"
            :ctas="{
              label: 'Add to basket',
              href: '/',             
              type: 'outline',
              size: 'sm',
              classes: {
                base: 'btn',
              },
            }"
            :classes="{
              card: 'tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:row-span-4 tw:flow--1',
              caption: 'tw:min-h-[2lh] tw:text-default tw:mt-cq-md',
              body: 'tw:contents',
              content: 'tw:contents',
              price: 'tw:text-md'
            }"
            :config="{
              mergeConfig: true,
              showAllSlots: false,
              ctaCover: false,
              title: {
                size: 'sm'
              }
            }"
          >
          </CardsImageWithInfo>
        </template>        
      </LayoutGrid>
  </Block> 

  <Block class="flow" paddingY="2xl">
    <Heading size="xl">
      Popular Right Now
    </Heading>
    
      <LayoutGrid type="grid" minColumnWidth="5" :columns="2">
        <template v-for="(product, i) in populateProductArray(2)" :key="i">
          <CardsImageWithInfo
            link="/"
            :title="product.title || ''"
            :picture="{
              src: product.prodImages[0]?.medium
            }"
            :price="{rrp: {
              value: product.price.toString()
            } }"
            :ctas="{
              label: 'Add to basket',
              href: '/',             
              type: 'outline',
              size: 'sm',
              classes: {
                base: 'btn',
              },
            }"
            :classes="{
              card: 'tw:[--card-left-col:max-content]',
              picture: 'tw:*:max-w-[150px] tw:*:m-cq-lg tw:bg-grey-10'
            }"
            :config="{
              mergeConfig: true,
              showAllSlots: false,
              ctaCover: false,
              fixedLayout: 'col',
              title: {
                size: 'default'
              }
            }"
          >
          </CardsImageWithInfo>
        </template>        
      </LayoutGrid>
  </Block>   


</template>
