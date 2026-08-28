<script setup lang="ts">

</script>

<template>
<Card 
    :picture="{
    src: 'http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&height=240&padding=false'
}"
:classes="{
    ctas: 'tw:contents'
}"
:config="{
    showAllSlots: false
}"
>
<template #ctas>
    <div class="tw:flex tw:justify-center tw:gap-4">
        <Button to="/books" :classes="{
            text: 'tw:sr-only'
        }">View all books</Button>
    </div>
</template>
</Card>

</template>