<script setup>
import { ref } from "vue";
import socialsData from "../data/socials.js";
import SocialButton from "./SocialButton.vue";

const textContact = ref(["C", "o", "n", "t", "a", "c", "t", " ", "M", "E"]);
const socials = ref(socialsData);
</script>

<template>
  <div
    id="socials"
    class="flex flex-col md:flex-row justify-center items-center"
  >
    <div class="w-[350px] md:w-[730px]">
      <div class="grid justify-items-center">
        <img
          src="../assets/images/upuan.jpg"
          alt=""
          class="h-auto w-40 rounded-2xl hover:scale-150 z-10 transition-all duration-200"
        />
      </div>
      <div class="flex flex-col justify-center items-center mt-10">
        <h1
          class="text-2xl text-gray-300 font-semibold tracking-tighter uppercase"
        >
          <span
            v-for="textLetter in textContact"
            :key="textLetter.indexOf"
            class="hover:text-neon-green cursor-auto"
            >{{ textLetter }}</span
          >
        </h1>
        <p class="text-sm tracking-tighter font-semibold mb-7 text-center mt-5">
          Reach out to me on social media, and let's collaborate, innovate, and
          make magic happen!
        </p>
        <SocialButton :socials="socials" />
      </div>
    </div>
  </div>
</template>
