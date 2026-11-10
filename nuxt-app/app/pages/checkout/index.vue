<script setup lang="ts">

definePageMeta({
    title: 'Checkout',
    layout: 'checkout',
})

// onMounted(() => {
//    const requiredFields = document.querySelectorAll("input[data-val-required]");
//    requiredFields.forEach(field => {
//     //    field.addEventListener("input", () => {
//     //        if (field.validity.valid) {
//     //            field.style.outlineColor = "var(--input-outline-color)";
//     //        } else {
//     //            field.style.outlineColor = "var(--input-outline-color)";
//     //        }
//     //    });
//     field.setAttribute("required", "required");
//    });
// });

</script>

<template>
    <PageCheckoutDeliverySection />         
</template>