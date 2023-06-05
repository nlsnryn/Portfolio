<script setup>
import { Icon } from "@iconify/vue";
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const state = reactive({
  currentButton: "home",
});

function navClick(navbars) {
  state.currentButton = navbars;
}
</script>

<template>
  <nav
    role="navigation"
    aria-label="navigation"
    id="top-nav"
    class="flex flex-col md:flex-row md:justify-center md:items-center gap-4 items-center pt-8 pb-8 sm:pb-16 w-full md:w-[740px] mx-auto"
  >
    <ul class="flex justify-center items-center gap-4 px-3 py-1">
      <RouterLink
        to="/"
        @click="navClick('home')"
        class="flex items-center gap-2 relative font-semibold text-neon-green before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-neon-green before:transition hover:before:scale-x-100 duration-200 ease-in-out"
      >
        <i class="fa-solid fa-house text-2xl"></i>
        <li v-if="state.currentButton === 'home'" class="text-lg">Home</li>
      </RouterLink>
      <RouterLink
        to="/projects"
        @click="navClick('projects')"
        class="flex items-center gap-2 relative font-semibold text-neon-green before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-neon-green before:transition hover:before:scale-x-100"
        ><i class="fa-solid fa-file text-2xl"></i>
        <li v-if="state.currentButton === 'projects'" class="text-lg">
          Projects
        </li>
      </RouterLink>

      <RouterLink
        to="/socials"
        @click="navClick('contact')"
        class="flex items-center gap-2 relative font-semibold text-neon-green before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-neon-green before:transition hover:before:scale-x-100"
      >
        <i class="fa-solid fa-phone text-2xl"></i>

        <li v-if="state.currentButton === 'contact'" class="text-lg">
          Socials
        </li>
      </RouterLink>
    </ul>
  </nav>
</template>
