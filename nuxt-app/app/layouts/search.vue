<script setup lang="ts">
const props = defineProps<{
    sidebar?: boolean
}>()
</script>

<template>
    <div id="outerWrap">
        <div id="wrap">
            <PageHeader />
            <Breadcrumbs :classes="'wrapper tw:mt-md'" :items="[{ description: 'Home', url: '/' }, { description: 'Search', url: '/search' }]" />
            <main id="main-section">
                <slot />
            </main>
            <PageFooter />
        </div>
    </div>
</template>