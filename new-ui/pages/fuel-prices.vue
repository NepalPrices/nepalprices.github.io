<script setup>

definePageMeta({
    layout: "layout"
})
const { data, pending, error } = makeAuthenticatedApiCall('/fuel-prices')

// Pass the tableData to the Table component
const tableData = computed(() => {
    if (!data.value || !Array.isArray(data.value)) return []
    return data.value.map(item => ({
        fuelType: item.fuelType,
        location: item.location,
        price: item.price,
    }))
})

// Handle loading state
if (pending) {
    // Show loading indicator
}

// Handle error
if (error.value) {
    // Show error message
}

</script>

<template>
    <div v-if="tableData.value">
        <h1 class="text-3xl text-center">Fuel Prices in Nepal</h1>
        {{ tableData.value[0] }}
    </div>
    <div v-else-if="pending">
        Loading...
    </div>
    <div v-else-if="error">
        Error: {{ error.message }}
    </div>
</template>
