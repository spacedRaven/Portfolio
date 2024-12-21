<script setup lang="ts">
useHead({
    meta: [
        {
            name: 'portfolio',
            content: 'Portfolio',
        },
    ],
    htmlAttrs: {
        lang: 'nl-NL',
        class: '',
    },
    bodyAttrs: {
        class: 'bg-white font-base',
    },
});

useSeoMeta({});
</script>

<template>
    <div
        class="relative mx-auto flex min-h-screen w-full max-w-[1727px] flex-col overflow-y-clip overflow-x-visible font-base text-base md:text-xl"
    >
        <main class="grow">
            <slot />
        </main>
    </div>
</template>
