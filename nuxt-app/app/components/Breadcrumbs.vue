<script setup lang="ts">

type BreadcrumbsPropItem = {
  description?: string;
  facetId?: number;
  facetQuery?: string;
  menuLevel?: number;
  url?: string;
};

const props = defineProps<{
  items: BreadcrumbsPropItem[] | null | undefined;
}>();

</script>

<template>
  <div class="tw:flex tw:py-[var(--text-frame-y)] tw:mt-sm tw:*:not-first:before:content-['/'] tw:*:not-first:before:text-[var(--field-border-color)] tw:*:not-first:before:mx-layout-gap">
    <slot></slot>
    <template v-if="props.items && props.items.length">
      <template v-for="(breadcrumb, index) in props.items" :key="index">
        <a :href="breadcrumb.url || '#'">{{ breadcrumb.description }}</a>
      </template>
    </template>
  </div>
</template>