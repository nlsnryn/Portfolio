<script setup>
import { useNavbarStore } from "../store/navbar.store";
import { ref, onMounted } from "vue";

const navbarStore = useNavbarStore();
const navItems = ref([]);

onMounted(() => {
  navItems.value = [
    {
      id: "home",
      label: "Home",
      icon: "fa-solid fa-house ",
      active: true,
    },
    {
      id: "about",
      label: "About",
      icon: "fa-solid fa-address-card",
      active: false,
    },
    {
      id: "projects",
      label: "Projects",
      icon: "fa-solid fa-file",
      active: false,
    },
    {
      id: "socials",
      label: "Socials",
      icon: "fa-solid fa-phone",
      active: false,
    },
  ];
});
</script>
<!-- @click="navbarStore.navClick(item.id)" -->

<template>
  <nav class="flex justify-center py-4">
    <ul class="flex items-center gap-7 mx-5">
      <a
        v-for="item in navItems"
        :key="item.id"
        v-scroll-to="`#${item.id}`"
        class="navMenu transition-all duration-200"
      >
        <i class="text-2xl" :class="item.icon"></i>
        <li
          v-if="navbarStore.activedButton === item.id"
          class="text-sm font-semibold nav-link"
        >
          {{ item.label }}
        </li>
      </a>
    </ul>
  </nav>
</template>
