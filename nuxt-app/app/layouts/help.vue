<script setup lang="ts">
const props = defineProps<{
    sidebar?: boolean
}>()

const route = useRoute()

const pageID = computed(() => route.path.split('/').pop())

</script>

<template>
    <div id="outerWrap">
        <div id="wrap">
            <PageHeader />
            <main id="main-section">
                <div :id="pageID" class="tw:contents">
                    <div class="adminHelpPages">
                        <PageAccountHelpAsideMenu v-if="sidebar" />
                        <slot />
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    </div>
</template>