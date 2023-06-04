<script setup></script>

<template>
  <!-- Projects -->
  <main>
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-xl text-white font-semibold uppercase">
        Here are some projects I worked with.
      </h1>
      <div class="text-white w-[350px] md:w-[730px] mt-10">
        <div
          class="flex flex-col md:flex-row items-start bg-neutral-900 rounded overflow-hidden w-full mb-7"
        >
          <img
            src="../assets/images/SKILLABLE.PNG"
            alt="skillable"
            loading="lazy"
            class="h-auto w-96 object-cover md:m-3 rounded-lg md:rounded-lg hover:scale-105 transition-all duration-200"
          />
          <div
            class="ml-3 md:ml-0 flex flex-col justify-start items-start pl-1 pr-3"
          >
            <h1 class="mt-3 text-white text-lg font-bold uppercase">
              Skillable
            </h1>
            <p class="text-xs mt-1">
              It is a application that you can create account and login. You can
              also store, update and delete some notes or skills.
            </p>
            <div class="flex gap-2 my-4 flex-wrap">
              <div class="border-neon-green border-2 px-2 py-1 rounded-full">
                <p class="text-xs text-neon-green">Vue</p>
              </div>
              <div class="border-neon-green border-2 px-2 py-1 rounded-full">
                <p class="text-xs text-neon-green">Tailwind CSS</p>
              </div>
              <div class="border-neon-green border-2 px-2 py-1 rounded-full">
                <p class="text-xs text-neon-green">Laravel</p>
              </div>
              <div class="border-neon-green border-2 px-2 py-1 rounded-full">
                <p class="text-xs text-neon-green">Rest Api</p>
              </div>
              <div class="border-neon-green border-2 px-2 py-1 rounded-full">
                <p class="text-xs text-neon-green">Pinia</p>
              </div>
              <div class="border-neon-green border-2 px-2 py-1 rounded-full">
                <p class="text-xs text-neon-green">MySQL</p>
              </div>
            </div>
            <div
              class="flex items-center group cursor-pointer mb-5 md:mb-2 md:-mt-1"
            >
              <div
                class="bg-neutral-800 p-1 px-2 py-1 flex items-center gap-1 rounded-md border-2"
              >
                <img
                  src="../assets/images/github-mark-white.svg"
                  alt="github"
                  class="h-auto w-5"
                />
                <p class="uppercase text-[10px]">Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
