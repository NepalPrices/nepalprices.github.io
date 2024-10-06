<script setup>
defineProps({
    model: Object
})
</script>

<template>
    <!-- Card Blog -->
    <div
        class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="flex flex-col justify-center items-center rounded-t-xl p-8 rounded-es-xl">
            <img :src="model.image" :alt="model.model" class="h-40 w-auto" />
        </div>
        <div class="p-4 md:p-6">
            <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                {{ model.manufacturer }}
            </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                {{ model.model }}
            </h3>
            <p class="mt-3 text-gray-500 dark:text-neutral-500">
                {{ model.variant }}
            </p>
            <span
                class="w-full py-3 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl bg-red text-gray-800 shadow-sm hover:bg-red-50 focus:outline-none focus:bg-red-50 dark:bg-red-900 dark:border-red-700 dark:text-white dark:hover:bg-red-800 dark:focus:bg-red-800 mt-2">
                Rs. {{ model.price }}
            </span>
        </div>
        <div
            class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                :href="model.link" target="_blank">
                More Details &rarr;
            </a>
        </div>
    </div>
</template>
