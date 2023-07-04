<script setup>
import { ref } from "vue";
import { useNavbarStore } from "../store/navbar.store";

const navbarStore = useNavbarStore();

const about = ref(["A", "b", "o", "u", "t", " ", "M", "e"]);
</script>
<!-- @mouseenter="navbarStore.navClick('about')" -->
<template>
  <section id="about" class="pb-10 md:pb-20 pt-24">
    <h1
      class="text-gray-300 font-semibold uppercase text-center tracking-tighter text-2xl"
    >
      <span
        v-for="(letter, index) in about"
        :key="index"
        class="hover:text-neon-green"
        >{{ letter }}</span
      >
    </h1>
    <p class="text-sm md:text-base font-medium text-start mt-5">
      I am a Bachelor of Science in Information Technology graduate with a major
      in web development. I have two years of coding experience and I am a
      self-taught programmer. During my studies, I worked as a capstone
      programmer within our group, and I also gained valuable experience as a
      Laravel API developer during my internship. I am currently learning Vue.js
      and Laravel to become a full-stack developer and improve my web
      development skills by creating projects using these frameworks. My goal is
      to become a web developer and apply my programming knowledge to enhance my
      skills and contribute to a company's success.
    </p>

    <div class="flex flex-col md:flex-row mt-8 md:mt-20 gap-10">
      <div class="w-full md:w-1/2">
        <h1 class="text-lg font-medium tracking-tighter uppercase">
          Work Experience
        </h1>
        <h2 class="text-xs font-semibold uppercase text-neon-green mt-2">
          Web Developer Intern | Neksjob Corp.
        </h2>
        <h1 class="text-xs font-medium uppercase">Jan - April 2023</h1>
        <p class="text-sm text-start mt-5">
          As a web developer intern, I'm maintaining and enhancing company
          websites, created some features to enable employers to efficiently
          monitor applicants. I excel in creating APIs and managing tokens to
          facilitate seamless integration with the systems I build. Through my
          work, I have extensively explored and utilized technologies such as
          Laravel API, Sanctum, Postman, JWT, and honed my searching skills to
          deliver exceptional results.
        </p>
      </div>
      <div class="w-full md:w-1/2 -mt-1">
        <h1 class="text-lg font-medium tracking-tighter uppercase">
          Education
        </h1>
        <h2 class="text-xs font-semibold uppercase text-neon-green mt-2">
          Bachelor of Science in Information Technology
        </h2>
        <h3 class="text-xs font-medium uppercase text-gray-300">
          University of Rizal System
        </h3>
        <h1 class="text-xs font-medium uppercase">2019 - 2023</h1>
        <ul
          class="text-xs list-disc list-inside text-gray-300 font-medium uppercase mt-5 space-y-2"
        >
          <li>2nd yr to 4th yr Dean's Lister</li>
          <li>Capstone project Programmer</li>
          <li>QPA 1.46</li>
        </ul>
      </div>
    </div>
  </section>
</template>
