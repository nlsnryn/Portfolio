<script setup>
import { ref } from "vue";
import myProjects from "../data/projects.js";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard.vue";

AOS.init();

const title = ref([
  "F",
  "r",
  "o",
  "m",
  " ",
  "V",
  "i",
  "s",
  "i",
  "o",
  "n",
  " ",
  "t",
  "o",
  " ",
  "R",
  "e",
  "a",
  "l",
  "i",
  "t",
  "y",
  ":",
  " ",
  "P",
  "r",
  "o",
  "j",
  "e",
  "c",
  "t",
  " ",
  "S",
  "h",
  "o",
  "w",
  "c",
  "a",
  "s",
  "e",
]);
const projects = ref(myProjects);
</script>

<template>
  <section id="projects" class="">
    <div class="flex flex-col pt-20 pb-28 text-center">
      <h1
        class="md:text-2xl text-gray-300 text-lg font-medium tracking-tighter uppercase"
      >
        <span
          v-for="(letter, index) in title"
          :key="index"
          class="hover:text-neon-green"
          >{{ letter }}</span
        >
      </h1>
      <p class="text-sm md:text-lg text-center font-medium mt-4">
        These projects are more than just work; they represent a journey of
        growth, learning, and achievement.
      </p>
      <div class="text-white mt-10">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
