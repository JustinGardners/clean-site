<script setup lang="ts">
import type { ClassValue } from 'clsx';

type BreadcrumbsPropItem = {
  description?: string;
  facetId?: number;
  facetQuery?: string;
  menuLevel?: number;
  url?: string;
};

const props = defineProps<{
  classes?: ClassValue;
  items: BreadcrumbsPropItem[] | null | undefined;
}>();

const defaultClasses = "c-breadcrumbs tw:flex tw:*:py-[var(--text-frame-y)] tw:*:not-first:before:content-['/'] tw:*:not-first:before:text-[var(--field-border-color)] tw:*:not-first:before:mx-layout-gap";

</script>

<template>
  <div :class="cn(defaultClasses, props.classes)">
    <slot></slot>
    <template v-if="props.items && props.items.length">
      <template v-for="(breadcrumb, index) in props.items" :key="index">
        <a :href="breadcrumb.url || '#'">{{ breadcrumb.description }}</a>
      </template>
    </template>
  </div>
</template>