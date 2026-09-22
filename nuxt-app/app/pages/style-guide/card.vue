<script setup lang="ts">
import ImageWithInfo from "~/components/cards/ImageWithInfo.vue";
</script>

<template>

  <div class="flow tw:pt-4xl">
    <section class="flow wrapper">
      <h3 class="heading-2xl">SingleImage Component</h3>
      <div
        class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]"
      >
        <template v-for="i in 6" :key="i">
          <CardsSingleImage
            :link="'/'"
            title="Test Title"
            shadow="lg"
            :bordered="true"
          />
        </template>
      </div>
    </section>
    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfo Component</h3>
      <div
        class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]"
      >
        <template v-for="i in 6" :key="i">
          <CardsImageWithInfo
            link="/"
            title="Test Title"
            author="Justin"
            :ctas="{
              label: 'Click me',
              href: '/',
              classes: {
                base: 'btn',
              },
            }"
          >
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
      <div
        class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]"
      >
        <template v-for="i in 6" :key="i">
          <CardsSingleCircleImage
            :link="'/'"
            title="Test Title"
            shadow="lg"
            :bordered="true"
          />
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">CircleImageWithInfo Component</h3>
      <div
        class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]"
      >
        <template v-for="i in 6" :key="i">
          <CardsCircleImageWithInfo
            :link="'/'"
            title="Test Title"
            subtitle="Test Subtitle"
            shadow="lg"
            :bordered="true"
          />
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfoFixedColumnLayout Component</h3>
      <div
        class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]"
      >
        <template v-for="i in 3" :key="i">
          <CardsImageWithInfoFixedColumnLayout
            :link="'/'"
            title="Test Title"
            subtitle="Test Subtitle"
            shadow="lg"
            :bordered="true"
          />
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfoFixedRow Layout Component</h3>
      <div
        class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]"
      >
        <template v-for="i in 3" :key="i">
          <CardsImageWithInfoFixedRowLayout
            :link="'/'"
            title="Test Title"
            subtitle="Test Subtitle"
            shadow="lg"
            :bordered="true"
          />
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

    <div class="wrapper">
      <Heading size="2xl"
        >Single
        <span
          class="tw:underline tw:decoration-6 tw:decoration-primary tw:underline-primary"
          >CardImageWithInfo</span
        >
        Examples</Heading
      >
    </div>
    <ExamplesSingleCardImageWithInfo />

    <ExamplesSingleCardImageWithInfoColReversed />

    <ExamplesSingleCardImageWithInfoFixedColLayout />

    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Fixed Row Layout</Heading>
      <LayoutGrid columnGap="xl" :columns="3" type="grid">
        <template v-for="index in 3" :key="index">
          <CardsImageWithInfo
            :link="'/'"
            title="The Genius of Trees"
            subtitle="How trees mastered the elements and shaped the world"
            shadow="lg"
            :classes="{
              title: 'tw:@2xl:text-2xl-fluid-type',
              subtitle: 'tw:text-grey-4 tw:flow--1',
              contentSlot:
                'tw:flex-col flow tw:line-clamp-5 tw:@5xl:line-clamp-10 tw:max-w-prose',
            }"
            :config="{
              fixedLayout: 'row',
              title: {
                as: 'h2',
                size: 'lg',
                fluid: true,
              },
              subtitle: {
                size: 'sm',
              },
              surface: '#c3b4ab',
              backdrop: true,
              directionLayout: {
                row: {
                  reverseOrder: index % 2 === 0 ? true : undefined,
                  backdropDirection: index % 2 === 1 ? 'to-top' : 'to-bottom',
                  backdropAnchorToPicture: index % 2 === 1 ? true : false,
                },
              },
            }"
          >
            <template #picture>
              <img src="/genius-of-trees.png" alt="Test Picture" />
              <!-- <img src="/botanical-background.png" class="tw:blur-md" alt="Test Picture" /> -->
            </template>
            <template #content>
              <p>
                Taking us on an awe-inspiring journey through deep history and
                across the globe, The Genius of Trees restores trees to their
                rightful position not as victims of our negligence but as
                ingenious, stunningly inventive agents in a grand ecological
                narrative.
              </p>
              <p>
                Some have been using fire as a reproductive tool since
                prehistoric times. Others have gone to extraordinary lengths to
                make sure their fruits reach large primates, who can spread
                their seeds over vast distances, while poisoning smaller and
                less useful mammals. Some can split solid rock and create
                fertile ground in barren landscapes, effectively building entire
                ecosystems from scratch.
              </p>
              <p>
                For the first time, we witness the inventive and astonishing
                ways trees sculpt and even master their environment and
                understand the science of how they achieve these feats.
              </p>
              <p>
                From oaks growing in Devon, England, and Amedi in Iraq to the
                laurel rainforests of the Canary Islands, metasequoias in
                California to fossil forests preserved from hundreds of millions
                of years ago, we see how trees not only farm the landscape in
                which they grow but also manipulate the elements, other species
                and even humans to achieve their ends. At once transporting and
                expert, this eye-opening, mind-expanding journey into the inner
                lives of nature's most powerful plant is a profoundly new and
                original way of understanding both the miracles trees perform
                and the glories of our natural world.
              </p>
            </template>
          </CardsImageWithInfo>
        </template>
      </LayoutGrid>
    </Block>

    <Block is="section" paddingY="lg" classes="flow">
      <Heading size="xl">Fixed Overlay Layout</Heading>
      <CardsImageWithInfo
        :link="'/'"
        title="Test Title"
        subtitle="Test Subtitle"
        shadow="lg"
        :classes="{
          card: 'tw:card-layout-overlay-aspect-[3/1]'
        }"
        :config="{
          fixedLayout: 'overlay',
          title: {
            as: 'h2',
            size: '2xl'
          },          
          surface: '#c3b4ab',
          directionLayout: {
            col: {
              reverseOrder: true,
            },
          },
        }"
      >
        <template #picture>
          <img
            src="/botanical-background.png"
            class="tw:opacity-25"
            alt="Test Picture"
          />
        </template>
      </CardsImageWithInfo>
    </Block>
  </div>

  <section class="flow wrapper">
    <div class="layout-grid"></div>
  </section>

  <!-- <BlocksBlock is="section">
    Hi
  </BlocksBlock> -->
  <Block is="section" paddingY="lg" classes="flow">
    <Heading size="xl" class="tw:font-size-min-xl">Critic Picks</Heading>
    <LayoutGrid columnGap="xl" type="grid">
      <ImageWithInfo
        title="The Genius of Trees"
        shadow="lg"
        :bordered="true"
        :picture="{
          src: '/a.jpg',
        }"
        :config="{
          surface: '#c3b4ab',
        }"
        :ctaCover="false"
        :ctas="{
          href: '/',
          label: 'Click me',
        }"
      >
        <template #content>
          <p>
            The extraordinary story of the inventive and astonishing ways trees
            have shaped our natural world.
          </p>
        </template>
      </ImageWithInfo>
      <ImageWithInfo
        title="The Genius of Trees"
        shadow="lg"
        :bordered="true"
        :picture="{
          src: '/eagle-days.png',
        }"
        :config="{
          surface: '#d1774d',
          directionLayout: {
            row: {
              reverseOrder: true,
            },
          },
        }"
      >
        <template #content>
          <p>
            The extraordinary story of the inventive and astonishing ways trees
            have shaped our natural world.
          </p>
        </template>
      </ImageWithInfo>
      <ImageWithInfo
        title="The Genius of Trees"
        shadow="lg"
        :bordered="true"
        :picture="{
          src: '/a.jpg',
        }"
        :config="{
          surface: '#c3b4ab',
        }"
      >
        <template #content>
          <p>
            The extraordinary story of the inventive and astonishing ways trees
            have shaped our natural world.
          </p>
        </template>
      </ImageWithInfo>
    </LayoutGrid>
  </Block>
</template>
