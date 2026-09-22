<script setup lang="ts">
import { colourClasses, colorPrimaryRangeClasses, colorSecondaryRangeClasses, colorGreyRangeClasses, colorTertiaryRangeClasses } from "~/data/colorTailwindClasses";

</script>

<template>
  <section class="wrapper">
    <div class="tw:flex tw:gap-sm tw:flex-col">
      <div class="tw:flex tw:gap-sm">
        <div
          v-for="colour in Object.keys(colourClasses)"
          :key="colour"
          :class="[
            colourClasses[colour as keyof typeof colourClasses],
            'tw:size-2xl tw:rounded-full',
          ]"
        />
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div
          v-for="entry in colorPrimaryRangeClasses"
          :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square"
          :class="entry"
        >
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div
          v-for="entry in colorSecondaryRangeClasses"
          :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square"
          :class="entry"
        >
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div
          v-for="entry in colorTertiaryRangeClasses"
          :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square"
          :class="entry"
        >
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div
          v-for="entry in colorGreyRangeClasses"
          :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square"
          :class="entry"
        >
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
    </div>
  </section>
</template>