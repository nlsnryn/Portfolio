<script setup>
import Home from "@/components/Home.vue";
import About from "../components/About.vue";
import Project from "@/components/Project.vue";
import Social from "@/components/Social.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="pb-10">
    <div class="flex flex-col justify-center items-center">
      <div class="w-[350px] md:w-[730px]">
        <Navbar />
      </div>
    </div>
    <Home />
    <About />
    <Project />
    <Social />
  </div>
</template>
