<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav
    role="navigation"
    aria-label="navigation"
    id="top-nav"
    class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 items-center pt-8 pb-8 sm:pb-16 w-full md:w-[740px] mx-auto"
  >
    <ul class="flex justify-center items-center gap-4 px-3 py-1">
      <a
        href=""
        class="relative font-semibold text-neon-green before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-neon-green before:transition hover:before:scale-x-100"
      >
        <li class="text-lg">Home</li>
      </a>

      <a
        href=""
        class="relative font-semibold text-neon-green before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-neon-green before:transition hover:before:scale-x-100"
      >
        <li class="text-lg">Social</li>
      </a>
    </ul>
    <div
      class="group w-fit text-[11px] flex items-center justify-center font-semibold rounded-lg hover:bg-neon-green px-4 py-1.5 cursor-pointer"
    >
      <Icon
        icon="heroicons-outline:document-text"
        class="h-auto w-7 bg-neon-green group-hover:bg-neutral-800 group-hover:text-neon-green text-neutral-800 rounded-full p-0.5 mr-3"
      />
      <h1 class="text-sm group-hover:text-gray-900">Download CV</h1>
    </div>
  </nav>
</template>
