<script setup>
import { defineProps } from "vue";

const props = defineProps({
  socials: {
    type: String,
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
    class="flex justify-center items-center rounded bg-neon-green md:px-5 w-[350px] md:w-[450px] text-md text-center font-medium text-gray-800 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-neon-green mt-5"
  >
    <i :class="social.icon" class="mr-2 text-3xl"></i>
    <p class="text-gray-800 font-medium text-lg">{{ social.text }}</p></a
  >
</template>
