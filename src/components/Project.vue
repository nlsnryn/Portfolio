<script setup>
import { ref } from "vue";
import myProjects from "../data/projects.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavbarStore } from "../store/navbar.store.js";

AOS.init();

const navbarStore = useNavbarStore();
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
<!-- @mouseenter="navbarStore.navClick('projects')" -->
<template>
  <section id="projects" class="">
    <div class="flex flex-col pt-16 pb-28 text-center">
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
        <div
          v-for="project in projects"
          :key="project.id"
          class="flex flex-col md:flex-row items-start bg-neutral-900 rounded overflow-hidden mb-5 md:gap-7 mt-10"
        >
          <div class="w-full md:w-1/2">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="h-52 w-full object-cover md:m-3 rounded-t-lg md:rounded-lg hover:scale-105 transition-all duration-200"
            />
          </div>
          <div
            class="w-full md:w-1/2 ml-3 md:ml-0 flex flex-col text-start justify-start items-start pl-1 pr-3 mt-2"
          >
            <h1 class="mt-3 text-white text-lg font-bold uppercase">
              {{ project.title }}
            </h1>
            <p class="text-xs mt-1 mr-3">{{ project.description }}</p>
            <div class="flex gap-2 my-4 flex-wrap mr-5">
              <div
                v-for="(tech, index) in project.technologies"
                :key="index"
                class="border-neon-green border-2 px-2 py-1 rounded-full"
              >
                <p class="text-xs text-neon-green">{{ tech }}</p>
              </div>
            </div>
            <div
              class="flex items-center gap-2 group cursor-pointer mb-5 md:mb-2 md:-mt-1"
            >
              <a
                :href="project.repository"
                target="_blank"
                class="bg-neutral-800 p-1 px-3 py-1.5 flex items-center gap-1 mt-1 rounded-md hover:-translate-y-1 transition-all duration-200"
              >
                <img
                  src="../assets/images/github-mark-white.svg"
                  alt="github"
                  class="h-auto w-5"
                />
                <p class="uppercase text-[10px]">Code</p>
              </a>

              <a
                v-if="project.api"
                :href="project.api"
                target="_blank"
                class="bg-neutral-800 p-1 px-3 py-2 flex items-center gap-1 mt-1 rounded-md hover:-translate-y-1 transition-all duration-200"
              >
                <i class="fa-solid fa-server text-white"></i>
                <p class="uppercase text-[10px]">API</p>
              </a>

              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="bg-neutral-800 p-1 px-3 py-2 flex items-center gap-1 mt-1 rounded-md hover:-translate-y-1 transition-all duration-200"
                ><i class="fa-solid fa-link text-white"></i>
                <p class="uppercase text-[10px]">Demo</p></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
