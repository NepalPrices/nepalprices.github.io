<script setup>
import { ref, computed } from 'vue'
definePageMeta({
    layout: "layout"
})

const { data, pending, error } = useFetch('https://backend.nepalprices.com/api/bike-prices', {
    headers: {
        'x-api-key': 'LEDAYGANGAPP!@!APP'
    }
})

// Process the data
const processedData = computed(() => {
    if (!data.value || !Array.isArray(data.value)) return []

    return data.value.reduce((acc, item) => {
        if (!acc[item.manufacturer]) {
            acc[item.manufacturer] = []
        }
        acc[item.manufacturer].push({
            model: item.model,
            manufacturer: item.manufacturer,
            manufacturerImage: item.manufacturerImage,
            image: item.image,
            price: item.price,
            link: item.link
        })
        return acc
    }, {})
})

// Provide the processed data to AllBrands.vue
provide('manufacturers', () => processedData.value)
</script>

<template>
    <h1 class="text-3xl text-center">Bike Prices in Nepal</h1>
    <BikeBrands />
</template>
