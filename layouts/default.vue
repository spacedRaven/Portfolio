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
        class: 'bg-bunker',
    },
});

useSeoMeta({});
</script>

<template>
    <main>
        <slot />
    </main>
</template>
