<script setup>
import Home from "@/components/Home.vue";
import About from "../components/About.vue";
import Project from "@/components/Project.vue";
import Social from "@/components/Social.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div
    class="flex justify-center opacity-80 items-center w-full bg-zinc-900 fixed top-0 z-10"
  >
    <Navbar />
  </div>
  <div class="pb-10 mx-auto w-11/12 max-w-3xl">
    <Home />
    <About />
    <Project />
    <Social />
  </div>
</template>
