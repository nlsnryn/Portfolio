<script setup>
import { defineProps } from "vue";

const props = defineProps({
  socials: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <a
    v-for="social in props.socials"
    :key="social.id"
    :href="social.link"
    target="_blank"
    class="group relative"
  >
    <div
      class="hidden group-hover:block absolute text-xs px-2 py-1 mt-2 rounded z-10 -top-10 left-0 bg-zinc-900 text-gray-300"
    >
      <p>{{ social.text }}</p>
    </div>
    <i :class="social.icon" class="mr-2 text-4xl"></i>
  </a>
</template>
