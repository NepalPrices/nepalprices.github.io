<script setup>

// Inject the manufacturers data from index.vue
const manufacturers = inject('manufacturers')

// Reactive state to store the displayed manufacturers and selected brand models
const displayedManufacturers = ref({})
const selectedManufacturer = ref(null)

// Watch for changes in manufacturers data
watch(manufacturers, (newValue) => {
    if (newValue && typeof newValue === 'object') {
        displayedManufacturers.value = newValue
    }
}, { immediate: true })

// Function to get all manufacturers
const getAllManufacturers = () => {
    return Object.keys(displayedManufacturers.value || {})
}

// Handle selecting a manufacturer to show its models
const showModels = (manufacturer) => {
    selectedManufacturer.value = manufacturer
}

// Compute models for the selected manufacturer
const selectedModels = computed(() => {
    if (!selectedManufacturer.value) return []
    return displayedManufacturers.value[selectedManufacturer.value] || []
})
</script>

<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <!-- Show manufacturers list if no manufacturer is selected -->
        <div v-if="!selectedManufacturer" class="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
            <div v-for="(items, manufacturer) in displayedManufacturers" :key="manufacturer"
                class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
                <div class="h-auto flex flex-col justify-center items-center rounded-t-xl p-8">
                    <img :src="items[0]?.manufacturerImage" :alt="manufacturer" class="h-20 w-auto" />
                </div>
                <div class="p-4 md:p-6">
                    <h3 class="text-xl text-center font-semibold text-gray-800">
                        {{ manufacturer }}
                    </h3>
                </div>
                <div class="mt-auto flex border-t border-gray-200">
                    <button @click="showModels(manufacturer)"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium bg-white text-gray-800 hover:bg-blue-100 rounded-lg">
                        View Models
                    </button>
                </div>
            </div>
        </div>

        <!-- Show models if a manufacturer is selected -->
        <div v-else>
            <h2 class="text-2xl font-bold mb-4">Models of {{ selectedManufacturer }}</h2>
            <button @click="selectedManufacturer = null" class="mb-6 text-blue-500">
                &#8592; Back to Manufacturers </button>

            <!-- Display models using CardColumns component -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <CardColumns v-for="(model, index) in selectedModels" :key="index" :model="model" />
            </div>
        </div>
    </div>
</template>