<script setup>
definePageMeta({
    layout: "layout"
})

const { data, pending, error } = useFetch('https://backend.nepalprices.com/api/gold-prices', {
    headers: {
        'x-api-key': 'LEDAYGANGAPP!@!APP'
    }
})

// Pass the data to the Table component
const tableData = computed(() => {
    if (!data.value || !Array.isArray(data.value)) return []
    return data.value.map(item => ({
        date: item.date,
        price: item.price,
        type: item.type,
    }))
})
// Use data when it's available
console.log(data.value)

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
        <h1 class="text-3xl text-center">Gold Price in Nepal</h1>
        <!-- Card Blog -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
            <!-- Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Card -->
                <div
                    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img class="h-48 w-48 p-8" src="/gold.png" alt="">
                    </div>
                    <div class="p-4 md:p-6">
                        <h1
                            class="text-xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            {{ data[0].type }}
                        </h1>
                    </div>
                    <div
                        class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                        <span
                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-red-50 focus:outline-none focus:bg-red-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-900 dark:border-red-700 dark:text-white dark:hover:bg-red-800 dark:focus:bg-red-800">
                            Rs. {{ data[0].price }}
                        </span>
                    </div>
                </div>
                <!-- End Card -->

                <!-- Card -->
                <div
                    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div class="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img class="h-48 w-48 p-8" src="/silver.png" alt="">
                    </div>
                    <div class="p-4 md:p-6">

                        <h1
                            class="text-xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            {{ data[2].type }}
                        </h1>

                    </div>
                    <div
                        class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                        <span
                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-red-50 focus:outline-none focus:bg-red-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-900 dark:border-red-700 dark:text-white dark:hover:bg-red-800 dark:focus:bg-red-800">
                            Rs. {{ data[2].price }}
                        </span>
                    </div>
                </div>
                <!-- End Card -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Card Blog -->
    </div>
    <div v-else-if="pending">
        Loading...
    </div>
    <div v-else-if="error">
        Error: {{ error.message }}
    </div>
</template>
