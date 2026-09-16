<script setup lang="ts">
import ImageWithInfo from '~/components/cards/ImageWithInfo.vue'

const colourClasses = {
  primary: 'tw:bg-primary',
  secondary: 'tw:bg-secondary',
  success: 'tw:bg-success',
  danger: 'tw:bg-danger',
  warning: 'tw:bg-warning',
  info: 'tw:bg-info',
  light: 'tw:bg-light',
  dark: 'tw:bg-dark'
} as const

const colorPrimaryRangeClasses = [
  'tw:bg-primary-0 tw:text-primary-0-contrast',
  'tw:bg-primary-1 tw:text-primary-1-contrast',
  'tw:bg-primary-2 tw:text-primary-2-contrast',
  'tw:bg-primary-3 tw:text-primary-3-contrast',
  'tw:bg-primary-4 tw:text-primary-4-contrast',
  'tw:bg-primary-5 tw:text-primary-5-contrast',
  'tw:bg-primary-6 tw:text-primary-6-contrast',
  'tw:bg-primary-7 tw:text-primary-7-contrast',
  'tw:bg-primary-8 tw:text-primary-8-contrast',
  'tw:bg-primary-9 tw:text-primary-9-contrast',
  'tw:bg-primary-10 tw:text-primary-10-contrast',
  'tw:bg-primary-11 tw:text-primary-11-contrast'
] as const

const colorSecondaryRangeClasses = [
  'tw:bg-secondary-0 tw:text-secondary-0-contrast',
  'tw:bg-secondary-1 tw:text-secondary-1-contrast',
  'tw:bg-secondary-2 tw:text-secondary-2-contrast',
  'tw:bg-secondary-3 tw:text-secondary-3-contrast',
  'tw:bg-secondary-4 tw:text-secondary-4-contrast',
  'tw:bg-secondary-5 tw:text-secondary-5-contrast',
  'tw:bg-secondary-6 tw:text-secondary-6-contrast',
  'tw:bg-secondary-7 tw:text-secondary-7-contrast',
  'tw:bg-secondary-8 tw:text-secondary-8-contrast',
  'tw:bg-secondary-9 tw:text-secondary-9-contrast',
  'tw:bg-secondary-10 tw:text-secondary-10-contrast',
  'tw:bg-secondary-11 tw:text-secondary-11-contrast'
] as const

const colorTertiaryRangeClasses = [
  'tw:bg-tertiary-0 tw:text-tertiary-0-contrast',
  'tw:bg-tertiary-1 tw:text-tertiary-1-contrast',
  'tw:bg-tertiary-2 tw:text-tertiary-2-contrast',
  'tw:bg-tertiary-3 tw:text-tertiary-3-contrast',
  'tw:bg-tertiary-4 tw:text-tertiary-4-contrast',
  'tw:bg-tertiary-5 tw:text-tertiary-5-contrast',
  'tw:bg-tertiary-6 tw:text-tertiary-6-contrast',
  'tw:bg-tertiary-7 tw:text-tertiary-7-contrast',
  'tw:bg-tertiary-8 tw:text-tertiary-8-contrast',
  'tw:bg-tertiary-9 tw:text-tertiary-9-contrast',
  'tw:bg-tertiary-10 tw:text-tertiary-10-contrast',
  'tw:bg-tertiary-11 tw:text-tertiary-11-contrast'
] as const

const colorGreyRangeClasses = [
  'tw:bg-grey-0 tw:text-grey-0-contrast',
  'tw:bg-grey-1 tw:text-grey-1-contrast',
  'tw:bg-grey-2 tw:text-grey-2-contrast',
  'tw:bg-grey-3 tw:text-grey-3-contrast',
  'tw:bg-grey-4 tw:text-grey-4-contrast',
  'tw:bg-grey-5 tw:text-grey-5-contrast',
  'tw:bg-grey-6 tw:text-grey-6-contrast',
  'tw:bg-grey-7 tw:text-grey-7-contrast',
  'tw:bg-grey-8 tw:text-grey-8-contrast',
  'tw:bg-grey-9 tw:text-grey-9-contrast',
  'tw:bg-grey-10 tw:text-grey-10-contrast',
  'tw:bg-grey-11 tw:text-grey-11-contrast'
] as const


</script>

<template>
  <section class="wrapper tw:bg-primary-0">
    <h2 class="tw:flex tw:text-display-lg">AlpineJS test</h2>
    <div x-data="counter">
      <p x-text="count"
        class="tw:text-display-lg tw:aspect-square tw:min-size-[1em] tw:bg-primary tw:text-primary-contrast tw:rounded-full tw:grid tw:place-content-center tw:p-xl tw:max-w-fit tw:aspect-square">
      </p>
      <button x-on:click="count++">Increment</button>
    </div>
  </section>

  <section class="wrapper">
    <div class="tw:max-w-screen-lg tw:[--layout-column-min:10ch]">
      <div class="layout-grid">
        <CardsCircleImageWithInfo :link="'/'" title="New Releases" shadow="lg" :bordered="true" :picture="{
          src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Newreleases.png&amp;width=348&amp;padding=false'
        }" />
        <CardsCircleImageWithInfo :link="'/'" title="Bestsellers" shadow="lg" :bordered="true" :picture="{
          src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Childrenbooks.png&width=348&padding=false'
        }" />
        <CardsCircleImageWithInfo :link="'/'" title="Fiction Books" shadow="lg" :bordered="true" :picture="{
          src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Fictionbooks.png&width=348&padding=false'
        }" />
        <CardsCircleImageWithInfo :link="'/'" title="Non Fiction" shadow="lg" :bordered="true" :picture="{
          src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false'
        }" />
      </div>
    </div>
    <div class="container-md tm">
      <div class="row justify-content-md-center">
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/books/new-releases"><img alt="New Releases"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Newreleases.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/books/new-releases">New Releases</a></p>
          </div>
        </div>
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/Search?sort=Bestselling&amp;fq=01120-0314-4260"><img alt="Bestsellers"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Childrenbooks.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/Search?sort=Bestselling&amp;fq=01120-0314-4260">Bestsellers</a></p>
          </div>
        </div>
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/books/fiction"><img alt="Fiction Books"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Fictionbooks.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/books/fiction">Fiction Books</a></p>
          </div>
        </div>
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/books/non-fiction"><img alt="Non-Fiction"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/books/non-fiction">Non-Fiction</a></p>
          </div>
        </div>






      </div>
    </div>
  </section>

  <section>

    <div class="template-container tm--half center">
      <div class="template-row">
        <div class="col-12">
          <div class="title-block__sub">
            <h2 class="text-normal"> Custom Books </h2>
            <span class="title-block__main--link"><a
                href="/Search?sort=Bestselling&amp;ipp=6&amp;fq=01128&amp;sort=PriceAsc&amp;pg=1">See More</a></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="wrapper flow">

    <h1>Buttons</h1>

    <AlpineFor class="tw:flex tw:gap-sm"
      :data="{ buttons: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] }"
      items="buttons" item="button" item-key="button">
      <template #item>
        <button v-pre type="button" :class="'btn btn-' + button"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"></button>
      </template>
    </AlpineFor>



    <h3>Inverted Buttons</h3>
    <AlpineFor class="tw:flex tw:gap-sm tw:bg-primary tw:p-md"
      :data="{ buttons: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] }"
      items="buttons" item="button" item-key="button">
      <template #item>
        <button v-pre type="button" :class="'btn btn-' + button + ' ' + 'btn-inverted'"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"></button>
      </template>
    </AlpineFor>

    <h3>Outline Buttons</h3>
    <AlpineFor class="tw:flex tw:gap-sm tw:p-md"
      :data="{ buttons: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] }"
      items="buttons" item="button" item-key="button">
      <template #item>
        <button v-pre type="button" :class="'btn btn-' + button + ' ' + 'btn-outline'"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"></button>
      </template>
    </AlpineFor>

    <div>
      <Button type="solid" modifier="wide">Primary</Button>
    </div>

    <div>
      <Button type="solid" modifier="square">
        <Icon name="bx:package" />
      </Button>
    </div>

    <div>
      <Button type="solid" modifier="circle">
        <Icon name="bx:package" />
      </Button>
    </div>

    <div>
      <button type="button" class="btn btn-link">Link</button>
    </div>


    <div>
      <a class="btn btn-primary" href="#" role="button">Link</a>
      <button class="btn btn-primary" type="submit">Button</button>
      <input class="btn btn-primary" type="button" value="Input">
      <input class="btn btn-primary" type="submit" value="Submit">
      <input class="btn btn-primary" type="reset" value="Reset">
    </div>

    <div>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light">Light</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>

    <div>
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
      <button type="button" class="btn btn-secondary btn-lg">Large button</button>
    </div>

    <div>
      <button type="button" class="btn btn-primary btn-sm">Small button</button>
      <button type="button" class="btn btn-secondary btn-sm">Small button</button>
    </div>

    <div>
      <button type="button" class="btn btn-primary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
        Custom button
      </button>
    </div>
  </section>

  <section class="wrapper">
    <div class="tw:flex tw:gap-sm tw:flex-col">
      <div class="tw:flex tw:gap-sm">
        <div v-for="colour in Object.keys(colourClasses)" :key="colour"
          :class="[colourClasses[colour as keyof typeof colourClasses], 'tw:size-2xl tw:rounded-full']" />
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorPrimaryRangeClasses" :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorSecondaryRangeClasses" :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorTertiaryRangeClasses" :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorGreyRangeClasses" :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
    </div>
  </section>
  <section class="wrapper">
    <div class="*:block">
      <p class="h1 fluid unit-em tw:unit-em">h1. Bootstrap heading</p>
      <p class="h2 fluid unit-px">h2. Bootstrap heading</p>
      <p class="h3">h3. Bootstrap heading</p>
      <p class="h4">h4. Bootstrap heading</p>
      <p class="h5">h5. Bootstrap heading</p>
      <p class="h6">h6. Bootstrap heading</p>

      <p class="display-1">h1. Bootstrap heading</p>
      <p class="display-2">h2. Bootstrap heading</p>
      <p class="display-3">h3. Bootstrap heading</p>
      <p class="display-4">h4. Bootstrap heading</p>
      <p class="display-5">h5. Bootstrap heading</p>
      <p class="display-6">h6. Bootstrap heading</p>
    </div>
  </section>

  <section>
    <div class="test-primary tw:size-4xl"></div>

  </section>

  <div class="flow tw:pt-4xl tw:bg-mix-primary">
    <section class="flow wrapper">
      <h3 class="heading-2xl">SingleImage Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsSingleImage :link="'/'" title="Test Title" shadow="lg" :bordered="true" />
        </template>
      </div>
    </section>
    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfo Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsImageWithInfo link="/" title="Test Title" author="Justin" :ctas="{
            label: 'Click me',
            href: '/',
            classes: {
              base: 'btn'
            }
          }">
            <template #author="{ author }">
              Author Slot Content {{ author }}
            </template>
            <template #format="{ format }">
              Format Slot Content {{ format }}
            </template>
          </CardsImageWithInfo>
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">SingleCircleImage Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsSingleCircleImage :link="'/'" title="Test Title" shadow="lg" :bordered="true" />
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">CircleImageWithInfo Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsCircleImageWithInfo :link="'/'" title="Test Title" subtitle="Test Subtitle" shadow="lg"
            :bordered="true" />
        </template>
      </div>
    </section>


    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfoFixedColumnLayout Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 3" :key="i">
          <CardsImageWithInfoFixedColumnLayout :link="'/'" title="Test Title" subtitle="Test Subtitle" shadow="lg"
            :bordered="true" />
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfoFixedRow Layout Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 3" :key="i">
          <CardsImageWithInfoFixedRowLayout :link="'/'" title="Test Title" subtitle="Test Subtitle" shadow="lg"
            :bordered="true" />
        </template>
      </div>
    </section>

    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Critic Picks</Heading>
      <Glide data-glide='{"perView":4}'>
        <template v-for="i in 6" :key="i">
          <GlideSlide>
            <CardsImageWithInfo title="Test Title" />
          </GlideSlide>
        </template>
      </Glide>
    </Block>


    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Container Sizing</Heading>
      <LayoutGrid columnGap="xl" :columns="2" type="grid">
        <CardsImageWithInfo :link="'/'" title="The Genius of Trees"
          subtitle="How trees mastered the elements and shaped the world" shadow="lg" :classes="{
            subtitle: 'tw:text-grey-11 tw:flow--1',
            contentSlot: 'tw:flex-col flow tw:line-clamp-5 tw:@5xl:line-clamp-10 tw:max-w-prose'
          }" :config="{
          title: {
            as: 'h2',
            size: '2xl'
          },
          subtitle: {
            size: 'default'
          },
          surface: '#171b39',
          directionLayout: {
            col: {
              alignItems: 'center'
            }
          }
        }">
          <template #picture>
            <img src="/genius-of-trees.png" alt="Test Picture" />
            <img src="/botanical-background.png" class="tw:blur-md tw:opacity-10" alt="Test Picture" />
          </template>
          <template #content>
            <p>Taking us on an awe-inspiring journey through deep history and across the globe, The Genius of Trees
              restores trees to their rightful position not as victims of our negligence but as ingenious, stunningly
              inventive agents in a grand ecological narrative.</p>
            <p> Some have been using fire as a reproductive tool since prehistoric times. Others have gone to
              extraordinary lengths to make sure their fruits reach large primates, who can spread their seeds over vast
              distances, while poisoning smaller and less useful mammals. Some can split solid rock and create fertile
              ground in barren landscapes, effectively building entire ecosystems from scratch.</p>
            <p> For the first time, we witness the inventive and astonishing ways trees sculpt and even master their
              environment and understand the science of how they achieve these feats.</p>
            <p>From oaks growing in Devon, England, and Amedi in Iraq to the laurel rainforests of the Canary Islands,
              metasequoias in California to fossil forests preserved from hundreds of millions of years ago, we see how
              trees not only farm the landscape in which they grow but also manipulate the elements, other species and
              even humans to achieve their ends. At once transporting and expert, this eye-opening, mind-expanding
              journey into the inner lives of nature's most powerful plant is a profoundly new and original way of
              understanding both the miracles trees perform and the glories of our natural world.</p>
          </template>
        </CardsImageWithInfo>
      </LayoutGrid>
    </Block>


    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Container Sizing - reverse column</Heading>
      <LayoutGrid columnGap="xl" :columns="2" type="grid">
        <CardsImageWithInfo :link="'/'" title="The Genius of Trees"
          subtitle="How trees mastered the elements and shaped the world" shadow="lg" :classes="{
            subtitle: 'tw:text-grey-4 tw:flow--1',
            contentSlot: 'tw:flex-col flow tw:line-clamp-5 tw:@5xl:line-clamp-10 tw:max-w-prose'
          }" :config="{
          title: {
            as: 'h2',
            size: '2xl'
          },
          subtitle: {
            size: 'default'
          },
          surface: '#c3b4ab',
          directionLayout: {
            col: {
              reverseOrder: true,
              alignItems: 'center'
            }
          }
        }">
          <template #picture>
            <img src="/genius-of-trees.png" alt="Test Picture" />
            <img src="/botanical-background.png" class="tw:blur-md" alt="Test Picture" />
          </template>
          <template #content>
            <p>Taking us on an awe-inspiring journey through deep history and across the globe, The Genius of Trees
              restores trees to their rightful position not as victims of our negligence but as ingenious, stunningly
              inventive agents in a grand ecological narrative.</p>
            <p> Some have been using fire as a reproductive tool since prehistoric times. Others have gone to
              extraordinary lengths to make sure their fruits reach large primates, who can spread their seeds over vast
              distances, while poisoning smaller and less useful mammals. Some can split solid rock and create fertile
              ground in barren landscapes, effectively building entire ecosystems from scratch.</p>
            <p> For the first time, we witness the inventive and astonishing ways trees sculpt and even master their
              environment and understand the science of how they achieve these feats.</p>
            <p>From oaks growing in Devon, England, and Amedi in Iraq to the laurel rainforests of the Canary Islands,
              metasequoias in California to fossil forests preserved from hundreds of millions of years ago, we see how
              trees not only farm the landscape in which they grow but also manipulate the elements, other species and
              even humans to achieve their ends. At once transporting and expert, this eye-opening, mind-expanding
              journey into the inner lives of nature's most powerful plant is a profoundly new and original way of
              understanding both the miracles trees perform and the glories of our natural world.</p>
          </template>
        </CardsImageWithInfo>
      </LayoutGrid>
    </Block>


    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Fixed Column Layout</Heading>
      <LayoutGrid columnGap="xl" :columns="2" type="grid">
        <CardsImageWithInfo :link="'/'" title="The Genius of Trees"
          subtitle="How trees mastered the elements and shaped the world" shadow="lg" :classes="{
            subtitle: 'tw:text-grey-4 tw:flow--1',
            contentSlot: 'tw:flex-col flow tw:line-clamp-5 tw:@5xl:line-clamp-10 tw:max-w-prose'
          }" :config="{
          fixedLayout: 'col',
          title: {
            as: 'h2',
            size: '2xl'
          },
          subtitle: {
            size: 'default'
          },
          surface: '#c3b4ab',
          directionLayout: {
            col: {
              alignItems: 'center',
              imageSelfAlign: 'end'
            },            
          },
        }">
          <template #picture>
            <img src="/genius-of-trees.png" alt="Test Picture" />
            <img src="/botanical-background.png" class="tw:blur-md" alt="Test Picture" />
          </template>
          <template #content>
            <p>Taking us on an awe-inspiring journey through deep history and across the globe, The Genius of Trees
              restores trees to their rightful position not as victims of our negligence but as ingenious, stunningly
              inventive agents in a grand ecological narrative.</p>
            <p> Some have been using fire as a reproductive tool since prehistoric times. Others have gone to
              extraordinary lengths to make sure their fruits reach large primates, who can spread their seeds over vast
              distances, while poisoning smaller and less useful mammals. Some can split solid rock and create fertile
              ground in barren landscapes, effectively building entire ecosystems from scratch.</p>
            <p> For the first time, we witness the inventive and astonishing ways trees sculpt and even master their
              environment and understand the science of how they achieve these feats.</p>
            <p>From oaks growing in Devon, England, and Amedi in Iraq to the laurel rainforests of the Canary Islands,
              metasequoias in California to fossil forests preserved from hundreds of millions of years ago, we see how
              trees not only farm the landscape in which they grow but also manipulate the elements, other species and
              even humans to achieve their ends. At once transporting and expert, this eye-opening, mind-expanding
              journey into the inner lives of nature's most powerful plant is a profoundly new and original way of
              understanding both the miracles trees perform and the glories of our natural world.</p>
          </template>
        </CardsImageWithInfo>
      </LayoutGrid>
    </Block>


    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Fixed Row Layout</Heading>
      <LayoutGrid columnGap="xl" :columns="3" type="grid">
        <template v-for="index in 3" :key="index">
        <CardsImageWithInfo :link="'/'" title="The Genius of Trees"
          subtitle="How trees mastered the elements and shaped the world" shadow="lg" :classes="{
            subtitle: 'tw:text-grey-4 tw:flow--1',
            contentSlot: 'tw:flex-col flow tw:line-clamp-5 tw:@5xl:line-clamp-10 tw:max-w-prose'
          }" :config="{
          fixedLayout: 'row',
          title: {
            as: 'h2',
            size: '2xl'
          },
          subtitle: {
            size: 'default'
          },
          surface: '#c3b4ab',
          directionLayout: {
            row: {
              reverseOrder: index % 2 === 0 ? true : null
            },            
          },
        }">
          <template #picture>
            <img src="/genius-of-trees.png" alt="Test Picture" />
            <img src="/botanical-background.png" class="tw:blur-md" alt="Test Picture" />
          </template>
          <template #content>
            <p>Taking us on an awe-inspiring journey through deep history and across the globe, The Genius of Trees
              restores trees to their rightful position not as victims of our negligence but as ingenious, stunningly
              inventive agents in a grand ecological narrative.</p>
            <p> Some have been using fire as a reproductive tool since prehistoric times. Others have gone to
              extraordinary lengths to make sure their fruits reach large primates, who can spread their seeds over vast
              distances, while poisoning smaller and less useful mammals. Some can split solid rock and create fertile
              ground in barren landscapes, effectively building entire ecosystems from scratch.</p>
            <p> For the first time, we witness the inventive and astonishing ways trees sculpt and even master their
              environment and understand the science of how they achieve these feats.</p>
            <p>From oaks growing in Devon, England, and Amedi in Iraq to the laurel rainforests of the Canary Islands,
              metasequoias in California to fossil forests preserved from hundreds of millions of years ago, we see how
              trees not only farm the landscape in which they grow but also manipulate the elements, other species and
              even humans to achieve their ends. At once transporting and expert, this eye-opening, mind-expanding
              journey into the inner lives of nature's most powerful plant is a profoundly new and original way of
              understanding both the miracles trees perform and the glories of our natural world.</p>
          </template>
        </CardsImageWithInfo>
        </template>

      </LayoutGrid>
    </Block>    

    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Fixed Overlay Layout</Heading>
      <CardsImageWithInfo :link="'/'" title="Test Title" subtitle="Test Subtitle" shadow="lg" :config="{
        fixedLayout: 'overlay',
        directionLayout: {
          col: {
            reverseOrder: true
          }
        }
      }">
        <template #picture>
          <img src="/a.jpg" alt="Test Picture" />
        </template>
      </CardsImageWithInfo>
    </Block>

  </div>

  <section class="flow wrapper">

    <div class="layout-grid">

    </div>
  </section>

  <!-- <BlocksBlock is="section">
    Hi
  </BlocksBlock> -->
  <Block is="section" paddingY="lg" classes="flow">
    <Heading size="xl" class="tw:font-size-min-xl">Critic Picks</Heading>
    <LayoutGrid columnGap="xl" :columns="2" type="grid">
      <ImageWithInfo title="The Genius of Trees" shadow="lg" :bordered="true" :picture="{
        src: '/a.jpg'
      }" :config="{
        surface: '#c3b4ab'
      }" :ctaCover="false" :ctas="{
        href: '/',
        label: 'Click me'
      }">
        <template #content>
          <p>The extraordinary story of the inventive and astonishing ways trees have shaped our natural world.</p>
        </template>
      </ImageWithInfo>
      <ImageWithInfo title="The Genius of Trees" shadow="lg" :bordered="true" :picture="{
        src: '/b.jpg'
      }" :config="{
        surface: '#d1774d',
        directionLayout: {
          row: {
            reverseOrder: true
          }
        }
      }">
        <template #content>
          <p>The extraordinary story of the inventive and astonishing ways trees have shaped our natural world.</p>
        </template>
      </ImageWithInfo>
      <ImageWithInfo title="The Genius of Trees" shadow="lg" :bordered="true" :picture="{
        src: '/a.jpg'
      }" :config="{
        surface: '#c3b4ab'
      }">
        <template #content>
          <p>The extraordinary story of the inventive and astonishing ways trees have shaped our natural world.</p>
        </template>
      </ImageWithInfo>
    </LayoutGrid>
  </Block>

</template>