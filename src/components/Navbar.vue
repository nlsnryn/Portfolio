<script setup>
import { useNavbarStore } from "../store/navbar.store";

const navbarStore = useNavbarStore();
</script>

<template>
  <nav class="flex justify-center py-4">
    <ul class="flex items-center gap-7 mx-5">
      <a
        v-scroll-to="'#home'"
        @click="navbarStore.navClick('home')"
        class="navMenu transition-all duration-200"
      >
        <i class="fa-solid fa-house text-2xl"></i>
        <li
          v-if="navbarStore.activedButton === 'home'"
          class="text-sm font-semibold"
        >
          Home
        </li>
      </a>
      <a
        v-scroll-to="'#about'"
        @click="navbarStore.navClick('about')"
        class="navMenu transition-all duration-200"
      >
        <i class="fa-solid fa-address-card text-2xl"></i>
        <li
          v-if="navbarStore.activedButton === 'about'"
          class="text-sm font-semibold"
        >
          About
        </li>
      </a>
      <a
        v-scroll-to="'#projects'"
        @click="navbarStore.navClick('projects')"
        class="navMenu transition-all duration-200"
        ><i class="fa-solid fa-file text-2xl"></i>
        <li
          v-if="navbarStore.activedButton === 'projects'"
          class="text-sm font-semibold"
        >
          Projects
        </li>
      </a>

      <a
        v-scroll-to="'#socials'"
        @click="navbarStore.navClick('contact')"
        class="navMenu transition-all duration-200"
      >
        <i class="fa-solid fa-phone text-2xl"></i>

        <li
          v-if="navbarStore.activedButton === 'contact'"
          class="text-sm font-semibold"
        >
          Socials
        </li>
      </a>
    </ul>
  </nav>
</template>
