<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    icon: string;
}>();

const iconPath = computed(() => {
    if (props.icon.startsWith('/public')) {
        return props.icon;
    } else {
        return `/icons/icons.svg#${props.icon}`;
    }
});
</script>

<template>
    <svg class="inline-block shrink-0 fill-current">
        <use :href="iconPath" />
    </svg>
</template>
