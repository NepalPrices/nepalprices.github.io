<script setup>
definePageMeta({
    layout: "layout"
})

const { data, pending, error } = useFetch('https://backend.nepalprices.com/api/fuel-prices', {
    headers: {
        'x-api-key': 'LEDAYGANGAPP!@!APP'
    }
})

// Pass the data to the Table component
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
    <div v-if="data">
        <!-- Render your content here -->
        <h1 class="text-3xl text-center">Fuel Prices in Nepal</h1>
        <!-- Card Blog -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
            <!-- Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Card -->
                <div
                    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div class="flex divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                        <span
                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-red-50 focus:outline-none focus:bg-red-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-900 dark:border-red-700 dark:text-white dark:hover:bg-red-800 dark:focus:bg-red-800">
                            {{ data[0].location }}
                        </span>
                    </div>

                    <div class="">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead class="bg-gray-50 dark:bg-neutral-800">
                                <tr>
                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Type
                                        </span>
                                    </th>
                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Price (Rs.)
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[0].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[0].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[1].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[1].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[2].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[2].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[4].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[4].price }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- End Card -->

                <!-- Card -->
                <div
                    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div class="flex divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                        <span
                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-red-50 focus:outline-none focus:bg-red-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-900 dark:border-red-700 dark:text-white dark:hover:bg-red-800 dark:focus:bg-red-800">
                            {{ data[5].location }}
                        </span>
                    </div>

                    <div class="">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead class="bg-gray-50 dark:bg-neutral-800">
                                <tr>
                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Type
                                        </span>
                                    </th>
                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Price (Rs.)
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[5].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[5].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[6].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[6].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[7].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[7].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[9].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[9].price }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- End Card -->

                <!-- Card -->
                <div
                    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div class="flex divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                        <span
                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-red-50 focus:outline-none focus:bg-red-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-900 dark:border-red-700 dark:text-white dark:hover:bg-red-800 dark:focus:bg-red-800">
                            Dhangadi, Birgung, Biratnagar
                        </span>
                    </div>

                    <div class="">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead class="bg-gray-50 dark:bg-neutral-800">
                                <tr>
                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Type
                                        </span>
                                    </th>
                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Price (Rs.)
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[10].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[10].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[11].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[11].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[12].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[12].price }}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[14].fuelType }}
                                        </span>
                                    </td>
                                    <td class="ps-6 py-3 text-start">
                                        <span class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {{ data[14].price }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
