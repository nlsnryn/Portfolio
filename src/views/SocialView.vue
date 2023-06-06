<script setup>
import { ref } from "vue";

const textContact = ref(["C", "o", "n", "t", "a", "c", "t", " ", "M", "E"]);
</script>

<template>
  <!-- Contact me-->
  <div class="flex flex-col md:flex-row justify-center items-center mt-3">
    <div class="text-white w-[350px] md:w-[730px]">
      <div class="flex flex-col justify-center items-center">
        <img
          ref="pfp"
          class="mb-10 md:mb-0 h-[300px] w-[240px] rounded object-cover"
          src="../assets/images/upuan.jpg"
          alt="Paul Valladares"
        />
        <h1 class="text-3xl text-gray-300 font-semibold mt-3">
          <span
            v-for="textLetter in textContact"
            :key="textLetter.indexOf"
            class="hover:text-neon-green cursor-auto"
            >{{ textLetter }}</span
          >
        </h1>

        <a
          href=""
          class="flex justify-center items-center rounded bg-neon-green md:px-5 w-[350px] md:w-[450px] text-md text-center font-medium text-gray-800 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-neon-green mt-7"
        >
          <i class="fa-solid fa-envelope mr-2 text-3xl"></i>
          <p class="text-gray-800 font-medium text-lg">Gmail</p></a
        >

        <a
          href=""
          class="flex justify-center items-center rounded bg-neon-green md:px-5 w-[350px] md:w-[450px] text-md text-center font-medium text-gray-800 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-neon-green mt-5"
        >
          <i class="fa-brands fa-github mr-2 text-3xl"></i>
          <p class="text-gray-800 font-medium text-lg">Github</p></a
        >

        <a
          href=""
          class="flex justify-center items-center rounded bg-neon-green md:px-5 w-[350px] md:w-[450px] text-md text-center font-medium text-gray-800 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-neon-green mt-5"
        >
          <i class="fa-brands fa-linkedin mr-2 text-3xl"></i>
          <p class="text-gray-800 font-medium text-lg">LinkedIn</p></a
        >

        <a
          href=""
          class="flex justify-center items-center rounded bg-neon-green md:px-5 w-[350px] md:w-[450px] text-md text-center font-medium text-gray-800 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-neon-green mt-5"
        >
          <i class="fa-brands fa-facebook-messenger mr-2 text-3xl"></i>
          <p class="text-gray-800 font-medium text-lg">Messenger</p></a
        >

        <a
          href=""
          class="flex justify-center items-center rounded bg-neon-green md:px-5 w-[350px] md:w-[450px] text-md text-center font-medium text-gray-800 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-neon-green mt-5"
        >
          <i class="fa-brands fa-square-facebook text-3xl mr-2"></i>
          <p class="text-gray-800 font-medium text-lg">Facebook</p></a
        >
      </div>
    </div>
  </div>
</template>
