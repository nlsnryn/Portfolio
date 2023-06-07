<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-start bg-neutral-900 rounded overflow-hidden w-full mb-5 md:gap-7"
  >
    <!--Fixed-->
    <div class="w-full md:w-1/2">
      <AnimatedPlaceholder
        class="h-52 w-full object-cover md:m-3 rounded-t-lg md:rounded-lg hover:scale-105 transition-all duration-200"
      />
    </div>
    <div
      class="w-full md:w-1/2 ml-3 md:ml-0 flex flex-col justify-start items-start pl-1 pr-3 mt-2"
    >
      <AnimatedPlaceholder class="mt-3 w-9/12 py-1 rounded" />

      <AnimatedPlaceholder class="mt-5 w-11/12 py-0.5 rounded" />
      <div class="flex gap-2 my-6 flex-wrap mr-5">
        <AnimatedPlaceholder class="px-5 py-1 rounded" />
        <AnimatedPlaceholder class="px-5 py-1 rounded" />
        <AnimatedPlaceholder class="px-5 py-1 rounded" />
      </div>
      <AnimatedPlaceholder class="p-1 px-6 py-1 rounded-md mb-5 md:mb-0" />
    </div>
  </div>
</template>
