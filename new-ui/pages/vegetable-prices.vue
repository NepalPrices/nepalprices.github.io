<script setup>
definePageMeta({
    layout: "layout"
})

const { data, pending, error } = makeAuthenticatedApiCall('/commodity-prices')

// Pass the data to the Table component
const tableData = computed(() => {
    if (!data.value || !Array.isArray(data.value)) return []
    return data.value.map(item => ({
        commodity: item.commodity,
        minimum: item.min,
        maximum: item.max,
        average: item.avg
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
    <div v-if="data">
        <!-- Render your content here -->
        <h1 class="text-3xl text-center">Vegetable Prices</h1>
        <Table :tableData="tableData" />
    </div>
    <div v-else-if="pending">
        Loading...
    </div>
    <div v-else-if="error">
        Error: {{ error.message }}
    </div>
</template>
