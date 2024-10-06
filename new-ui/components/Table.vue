<script setup>
const props = defineProps({
    tableData: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <!-- Table Section -->
    <div class="max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Card -->
        <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div
                        class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                        <!-- Table -->
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead class="bg-red-50 dark:bg-red-800">
                                <tr>
                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Commodity
                                        </span>
                                    </th>

                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Minimum (Rs.)
                                        </span>
                                    </th>

                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Maximum (Rs.)
                                        </span>
                                    </th>

                                    <th scope="col" class="ps-6 py-3 text-start">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Average (Rs.)
                                        </span>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-end"></th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                <tr v-for="(item, index) in props.tableData" :key="index">
                                    <td class="w-full px-6 py-3">
                                        <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{
                                            item.commodity }}</span>
                                    </td>
                                    <td class="w-full px-6 py-3">
                                        <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{
                                            item.minimum }}</span>
                                    </td>
                                    <td class="w-full h-px px-6 py-3">
                                        <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{
                                            item.maximum }}</span>
                                    </td>
                                    <td class="w-full px-6 py-3">
                                        <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{
                                            item.average }}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- End Table -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Card -->
    </div>
    <!-- End Table Section -->
</template>
