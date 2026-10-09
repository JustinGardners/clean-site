<script setup lang="ts">

// Dummy products with no strict type right now
const popularRightNowProducts = [{
  title: "A Thousand Feasts",
  price: 22.99,
  prodImages: [{
    medium: '/heated-rivialry.png'
  }],
  prodUrl: 'Product/Richard-Osman/The-Impossible-Fortune'
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/birds.png'
  }],
  prodUrl: 'Product/Richard-Osman/The-Impossible-Fortune'
},
{
  title: "Pinch of Nom Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/court-of-thorns.png'
  }],
  prodUrl: 'Product/Richard-Osman/The-Impossible-Fortune'
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/releasing-10.png'
  }],
  prodUrl: 'Product/Richard-Osman/The-Impossible-Fortune'
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/salads.png'
  }],
  prodUrl: 'Product/Richard-Osman/The-Impossible-Fortune'
},
{
  title: "What's For Dinner? Slow Cooker",
  price: 22.99,
  prodImages: [{
    medium: '/yesteryear.png'
  }],
  prodUrl: 'Product/Richard-Osman/The-Impossible-Fortune'
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

const chunkArray = (array: any[], size: number) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
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
  <Hero title="Hero" :classes="{
    pictureImage: 'tw:mix-blend-luminosity'
  }" :config="{
    backdrop: true,
    directionLayout: {
      col: {
        backdropDirection: 'to-left',
        backdropAnchorToPicture: true
      }
    },
    title: {
      size: 'display-lg'
    }
  }" />

  <Block paddingY="xl">
    <LayoutGrid minColumnWidth="10" type="grid" :columns="6" class="tw:[--card-top-row:100cqi]">
      <CardsCircleImageWithInfo data-fluid-type-relative :link="'/'" title="Crime &amp; Thriller" :bordered="true"
        :picture="{
          src: '/heated-rivialry.png',
          source: [{
            srcset: '/court-of-thorns.png',
            type: 'image/png',
            media: '(max-width: 600px)'
          }]
        }" :classes="{
          body: 'tw:px-0 tw:justify-center',
          picture: 'tw:rounded-full tw:overflow-clip tw:bg-grey-10',
          pictureImage: 'tw:object-contain tw:-rotate-22 tw:translate-y-[3rem] tw:translate-x-[1rem] tw:rounded-none tw:drop-shadow-2xl',
          caption: 'tw:*:text-primary'
        }" :config="{
        showAllSlots: false,
        title: {
          fluid: true,
          size: 'default'
        }
      }" />
      <CardsCircleImageWithInfo data-fluid-type-relative :link="'/'" title="Mystery &amp; Suspense" :bordered="true"
        :picture="{
          src: '/heated-rivialry.png',
        }" :classes="{
          body: 'tw:px-0 tw:justify-center',
          picture: 'tw:rounded-full tw:overflow-clip tw:bg-grey-10',
          pictureImage: 'tw:object-contain tw:-rotate-22 tw:translate-y-[3rem] tw:translate-x-[1rem] tw:rounded-none tw:drop-shadow-2xl',
          caption: 'tw:*:text-primary'
        }" :config="{
        showAllSlots: false,
        title: {
          fluid: true,
          size: 'default'
        }
      }" />
      <CardsCircleImageWithInfo data-fluid-type-relative :link="'/'" title="Psychological Thriller" :bordered="true"
        :picture="{
          src: '/heated-rivialry.png',
        }" :classes="{
          body: 'tw:px-0 tw:justify-center',
          picture: 'tw:rounded-full tw:overflow-clip tw:bg-grey-10',
          pictureImage: 'tw:object-contain tw:-rotate-22 tw:translate-y-[3rem] tw:translate-x-[1rem] tw:rounded-none tw:drop-shadow-2xl',
          caption: 'tw:*:text-primary'
        }" :config="{
        showAllSlots: false,
        title: {
          fluid: true,
          size: 'default'
        }
      }" />
      <CardsCircleImageWithInfo data-fluid-type-relative :link="'/'" title="Detective Fiction" :bordered="true"
        :picture="{
          src: '/heated-rivialry.png',
        }" :classes="{
          body: 'tw:px-0 tw:justify-center',
          picture: 'tw:rounded-full tw:overflow-clip tw:bg-grey-10',
          pictureImage: 'tw:object-contain tw:-rotate-22 tw:translate-y-[3rem] tw:translate-x-[1rem] tw:rounded-none tw:drop-shadow-2xl',
          caption: 'tw:*:text-primary'
        }" :config="{
        showAllSlots: false,
        title: {
          fluid: true,
          size: 'default'
        }
      }" />
      <CardsCircleImageWithInfo data-fluid-type-relative :link="'/'" title="Legal Thriller" :bordered="true" :picture="{
        src: '/heated-rivialry.png',
      }" :classes="{
        body: 'tw:px-0 tw:justify-center',
        picture: 'tw:rounded-full tw:overflow-clip tw:bg-grey-10',
        pictureImage: 'tw:object-contain tw:-rotate-22 tw:translate-y-[3rem] tw:translate-x-[1rem] tw:rounded-none tw:drop-shadow-2xl',
        caption: 'tw:*:text-primary'
      }" :config="{
        showAllSlots: false,
        title: {
          fluid: true,
          size: 'default'
        }
      }" />
      <CardsCircleImageWithInfo data-fluid-type-relative :link="'/'" title="Noir Fiction" :bordered="true" :picture="{
        src: '/heated-rivialry.png',
      }" :classes="{
        body: 'tw:px-0 tw:justify-center',
        picture: 'tw:rounded-full tw:overflow-clip tw:bg-grey-10',
        pictureImage: 'tw:object-contain tw:-rotate-22 tw:translate-y-[3rem] tw:translate-x-[1rem] tw:rounded-none',
        caption: 'tw:*:text-primary'
      }" :config="{
        showAllSlots: false,
        title: {
          fluid: true,
          size: 'default'
        }
      }" />
    </LayoutGrid>
  </Block>

  <Block class="flow tw:flow--lg">
    <Heading size="xl" color="primary">
      Popular Right Now
    </Heading>

    <LayoutGrid minColumnWidth="15" columnCount="6" type="grid">
      <template v-for="(product, i) in popularRightNowProducts" :key="i">
        <CardsImageWithInfo :link="product.prodUrl" :title="product.title" :picture="{
          src: product.prodImages[0]?.medium,
        }" :price="{
          rrp: {
            value: product.price.toString()
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
  </Block>

  <Block class="flow tw:flow--lg" paddingY="2xl">
    <Heading size="xl" color="primary">
      Top Paid
    </Heading>
    <div class="tw:overflow-x-auto">
      <LayoutGrid minColumnWidth="20" columnCount="5" type="grid"
        class="products-counter tw:min-w-[calc((var(--root-max-wrapper-width)*1px)-var(--layout-gap))]">
        <template v-for="(product, i) in chunkArray(populateProductArray(15), 3)" :key="i">
          <!-- <pre>{{ product }}</pre> -->
          <div class="tw:flex tw:flex-col tw:gap-md tw:row-rule-solid tw:row-rule-[1px] tw:row-rule-grey-10">
            <template v-for="(subProduct, j) in product" :key="j">
              <CardsImageWithInfo :style="{ '--product-index': i * 3 + j + 1 }" :link="subProduct.prodUrl"
                :title="subProduct.title" :picture="{
                  src: subProduct.prodImages[0]?.medium,
                }" :classes="{
                  card: 'tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:[--card-left-col:55px] tw:row-span-4 tw:flow--1',
                  caption: 'tw:min-h-[2lh] tw:mt-cq-md',
                  picture: 'tw:self-center',
                  pictureImage: 'tw:object-contain tw:object-bottom tw:drop-shadow-lg',
                  price: 'heading-lg fluid tw:text-primary',
                  title: 'tw:*:line-clamp-2 tw:grid tw:grid-cols-[min-content_1fr] tw:place-items-center',
                  ctas: 'tw:flow--cq-lg'
                }" :config="{
              mergeConfig: true,
              showAllSlots: false,
              fixedLayout: 'col',
              ctaCover: false,
              title: {
                size: 'sm',
                color: 'primary'
              }
            }">
              </CardsImageWithInfo>
            </template>
          </div>

        </template>
      </LayoutGrid>
    </div>
  </Block>

  <Block class="flow tw:flow--lg tw:overflow-clip" paddingTop="xl" data-surface="primary">
    <!-- <Heading size="xl" color="primary">
      Books we love
    </Heading> -->
    <div>
      <LayoutGrid minColumnWidth="20" columnCount="5" type="grid" class="tw:[--image-offset-multiplier:5]">
        <CardsImageWithInfo link="/" title="Books we love" :classes="{
          card: 'tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:row-span-4 tw:flow--1 tw:overflow-visible tw:[--card-gap-column:var(--space-xl)]',
          picture: 'tw:self-center tw:grid tw:*:relative tw:justify-start tw:@container tw:grid-cols-1',
          pictureImage: 'tw:object-contain tw:object-bottom tw:drop-shadow-lg',
          price: 'heading-lg fluid tw:text-primary',
          title: 'tw:*:line-clamp-2',
          ctas: 'tw:flow--cq-lg'
        }" :config="{
          mergeConfig: true,
          showAllSlots: false,
          ctaCover: false,
          title: {
            size: 'xl',
            color: 'primary'
          },
          directionLayout: {
            'row': {
              reverseOrder: true
            }
          }
        }">
          <!-- <template #picture>
            <template v-for="(data, i) in popularRightNowProducts" :key="i">
                     <img
                      :src="data.prodImages[0]?.medium"
                      class="tw:ml-[calc((var(--image-offset)*1%)*var(--image-offset-multiplier,1))] tw:z-[var(--image-z-index)] tw:rotate-[calc(var(--rotate)*1deg)] tw:translate-z-[calc(var(--rotate)*1px]"
                      :style="{ '--rotate': `${popularRightNowProducts.length * i}`, '--image-offset': `${popularRightNowProducts.length * i}`, '--image-z-index': `${popularRightNowProducts.length - i}` }"
                    />             
                  </template>
          </template> -->
          <template #picture>
            <div class="book-wave tw:translate-y-[10%]" :style="{ '--total': popularRightNowProducts.length }">
              <img v-for="(data, i) in popularRightNowProducts" :key="i" :src="data.prodImages[0]?.medium"
                :alt="data.title" :style="{
                  '--i': i,
                  '--z': popularRightNowProducts.length - i
                }" />
            </div>
          </template>
          <template #content>
            <p>See recommended books from our team.</p>
          </template>
        </CardsImageWithInfo>
      </LayoutGrid>
    </div>
  </Block>

  <Block class="flow tw:flow--lg" paddingY="2xl">
    <Heading size="xl">
      Popular Right Now
    </Heading>

    <LayoutGrid type="grid" minColumnWidth="5" :columns="8">
      <template v-for="(product, i) in populateProductArray(8)" :key="i">
        <CardsImageWithInfo link="/" :title="product.title || ''" :picture="{
          src: product.prodImages[0]?.medium,
          lazy: true
        }" :price="{
          rrp: {
            value: product.price.toString()
          }
        }" :ctas="{
          label: 'Add to basket',
          href: '/',
          type: 'outline',
          size: 'sm',
          classes: {
            base: 'btn',
          },
        }" :classes="{
          card: 'tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:row-span-4 tw:flow--1',
          caption: 'tw:min-h-[2lh] tw:text-default tw:mt-cq-md',
          body: 'tw:contents',
          pictureImage: 'tw:object-contain tw:object-bottom tw:drop-shadow-lg',
          content: 'tw:contents',
          price: 'tw:text-md'
        }" :config="{
              mergeConfig: true,
              showAllSlots: false,
              ctaCover: false,
              title: {
                size: 'sm'
              }
            }">
        </CardsImageWithInfo>
      </template>
    </LayoutGrid>
  </Block>

  <Block class="flow tw:flow--lg" paddingBottom="2xl">
    <Heading size="xl">
      Popular Right Now
    </Heading>

    <LayoutGrid type="grid" minColumnWidth="5" :columns="2">
      <template v-for="(product, i) in populateProductArray(2)" :key="i">
        <CardsImageWithInfo link="/" :title="product.title || ''" :picture="{
          src: product.prodImages[0]?.medium
        }" :price="{
          rrp: {
            value: product.price.toString()
          }
        }" :ctas="{
          label: 'Add to basket',
          href: '/',
          type: 'outline',
          size: 'sm',
          classes: {
            base: 'btn',
          },
        }" :classes="{
          card: 'tw:[--card-left-col:max-content]',
          picture: 'tw:*:max-w-[150px] tw:*:m-cq-lg tw:bg-grey-10'
        }" :config="{
              mergeConfig: true,
              showAllSlots: false,
              ctaCover: false,
              fixedLayout: 'col',
              title: {
                size: 'default'
              }
            }">
        </CardsImageWithInfo>
      </template>
    </LayoutGrid>
  </Block>

  <Block class="flow tw:flow--lg" paddingBottom="2xl">
    <Heading size="xl">
      Trending Authors
    </Heading>

    <LayoutGrid type="flex">
      <template v-for="(color, i) in ['primary', 'secondary', 'tertiary', 'light', 'dark', 'grey', 'primary', 'secondary']" :key="i">
        <Card title="John Ternus" :picture="{
          src: '/profile.png',
          ratio: '3/2' /// needs fixing
        }" :classes="{
          pictureImage: 'tw:mix-blend-luminosity tw:aspect-[3/2] tw:object-contain tw:-translate-y-[10px]',
          body: 'tw:p-cq-xl'
        }" :config="{
          showAllSlots: false,
          surface: color,
          backdrop: true,
          directionLayout: {
            row: {
              backdropDirection: 'to-top',
              backdropAnchorToPicture: true
            }
          }
        }" />
      </template>
    </LayoutGrid>
  </Block>

  <Block class="flow" paddingY="2xl">
    <Glide data-glide='{"type":"carousel","perView":8,"gap":0,"breakpoints":{"1024":{"perView":4},"800":{"perView":2}}}'
      class="tw:mt-0">
      <template #title>
        <Heading size="xl">
          Featured Products
        </Heading>
      </template>
      <template v-for="(product, i) in populateProductArray(8)" :key="i">
        <GlideSlide>
          <CardsImageWithInfo :title="product.title || ''" :picture="{
            src: product.prodImages[0]?.medium
          }" :classes="{
            card: 'tw:mx-[calc(var(--layout-gap)/2)] tw:grid-rows-subgrid tw:[--card-picture-aspect:2/3] tw:row-span-4 tw:flow--1',
            caption: 'tw:min-h-[2lh] tw:text-default tw:mt-cq-md',
            body: 'tw:contents',
            content: 'tw:contents',
            price: 'tw:text-md'
          }" :price="{
            rrp: {
              value: product.price.toString()
            }
          }" :ctas="{
            label: 'Add to basket',
            href: '/',
            type: 'outline',
            size: 'sm',
            classes: {
              base: 'btn',
            },
          }" :config="{
                title: {
                  size: 'sm'
                },
                fixedLayout: 'row'
              }" />
        </GlideSlide>
      </template>
    </Glide>
  </Block>




</template>
