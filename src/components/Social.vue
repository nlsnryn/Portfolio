<script setup>
import { ref } from "vue";
import socialsData from "../data/socials.js";
import SocialButton from "./SocialButton.vue";

const textContact = ref(["C", "o", "n", "t", "a", "c", "t", " ", "M", "E"]);
const socials = ref(socialsData);
</script>
<!-- @mouseenter="navbarStore.navClick('contact')" -->
<template>
  <section id="socials" class="flex flex-col relative mt-20">
    <img
      src="../assets/images/nobg1.png"
      alt=""
      class="h-auto w-[30rem] grayscale opacity-20 absolute -top-36 right-[center]"
    />
    <div class="flex flex-col justify-center items-center mt-10">
      <h1
        class="text-2xl text-white font-semibold tracking-tighter uppercase z-10"
      >
        <span
          v-for="textLetter in textContact"
          :key="textLetter.indexOf"
          class="hover:text-neon-green cursor-auto"
          >{{ textLetter }}</span
        >
      </h1>
      <p class="max-w-sm text-white style-text mb-7 text-center mt-5 z-10">
        Reach out to me on social media, and let's collaborate, innovate, and
        make magic happen!
      </p>
      <div class="flex gap-5 mt-5 z-10">
        <SocialButton :socials="socials" />
      </div>
    </div>
  </section>
</template>
