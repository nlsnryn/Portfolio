<script setup>
import { ref, onMounted } from "vue";
import Home from "@/components/Home.vue";
import About from "../components/About.vue";
import Project from "@/components/Project.vue";
import Social from "@/components/Social.vue";
import Navbar from "@/components/Navbar.vue";
import { useNavbarStore } from "../store/navbar.store";

const navbarStore = useNavbarStore();
onMounted(() => {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY + 200;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navbarStore.navClick(id);
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        navbarStore.navClick(id);
      }
    });
  };
});
</script>

<template>
  <div
    class="flex justify-center opacity-80 items-center w-full bg-zinc-900 fixed top-0 z-10"
  >
    <Navbar />
  </div>
  <div class="pb-10 mx-auto w-11/12 max-w-3xl relative">
    <Home />
    <About />
    <Project />
    <Social />
  </div>
</template>
