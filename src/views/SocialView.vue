<script setup>
import { ref } from "vue";
import socialsData from "../data/socials.js";
import SocialButton from "../components/SocialButton.vue";

const textContact = ref(["C", "o", "n", "t", "a", "c", "t", " ", "M", "E"]);
const socials = ref(socialsData);
</script>

<template>
  <!-- Contact me-->
  <div class="flex flex-col md:flex-row justify-center items-center">
    <div class="text-white w-[350px] md:w-[730px]">
      <div class="flex flex-col justify-center items-center">
        <!-- <img
          ref="pfp"
          class="mb-10 md:mb-0 h-[300px] w-[240px] rounded-full object-cover"
          src="../assets/images/upuan.jpg"
          alt="nelson"
        /> -->
        <h1
          class="text-2xl text-gray-300 font-semibold mt-3 tracking-tighter uppercase"
        >
          <span
            v-for="textLetter in textContact"
            :key="textLetter.indexOf"
            class="hover:text-neon-green cursor-auto"
            >{{ textLetter }}</span
          >
        </h1>
        <p class="text-sm tracking-tighter font-semibold mb-7 text-center">
          Reach out to me on social media, and let's collaborate, innovate, and
          make magic happen!
        </p>
        <SocialButton :socials="socials" />
      </div>
    </div>
  </div>
</template>
