<script setup>
import { reactive } from "vue";

const state = reactive({
  currentButton: localStorage.getItem("navigation"),
});

function navClick(navbars) {
  state.currentButton = navbars;
  localStorage.setItem("navigation", navbars);
  state.currentButton = localStorage.getItem("navigation");
}
</script>

<template>
  <nav
    class="flex flex-col md:flex-row md:justify-center md:items-center gap-4 items-center py-5 w-full md:w-[740px] mx-auto fixed top-0 left-0 right-0 z-10"
  >
    <ul
      class="flex justify-center items-center gap-4 px-6 py-2 bg-neon-green rounded-full border-2 border-neutral-900"
    >
      <a href="#home" @click="navClick('home')" class="navMenu">
        <i class="fa-solid fa-house text-2xl"></i>
        <li v-if="state.currentButton === 'home'" class="text-sm font-semibold">
          Home
        </li>
      </a>
      <a href="#about" @click="navClick('about')" class="navMenu">
        <i class="fa-solid fa-address-card text-2xl"></i>
        <li
          v-if="state.currentButton === 'about'"
          class="text-sm font-semibold"
        >
          About
        </li>
      </a>
      <a href="#projects" @click="navClick('projects')" class="navMenu"
        ><i class="fa-solid fa-file text-2xl"></i>
        <li
          v-if="state.currentButton === 'projects'"
          class="text-sm font-semibold"
        >
          Projects
        </li>
      </a>

      <a href="#socials" @click="navClick('contact')" class="navMenu">
        <i class="fa-solid fa-phone text-2xl"></i>

        <li
          v-if="state.currentButton === 'contact'"
          class="text-sm font-semibold"
        >
          Socials
        </li>
      </a>
    </ul>
  </nav>
</template>
