<script setup>
import { animate } from "motion";
import { PowerGlitch } from "powerglitch";
import { onMounted, ref } from "vue";

const pfp = ref(null);

onMounted(() => {
  PowerGlitch.glitch(".glitch", {
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2000,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.7,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  animate(
    pfp.value,
    { y: [-6, 6] },
    {
      duration: 2,
      direction: "alternate",
      repeat: 100,
      easing: "ease-in-out",
    }
  );
});
</script>

<template>
  <main>
    <!-- Hero Section -->
    <div class="flex flex-col-reverse md:flex-row justify-center items-center">
      <div class="text-white w-[350px] md:w-[450px]">
        <h1
          class="font-bold text-3xl md:text-5xl tracking-tight mb-1 glitch text-white"
        >
          Nelson Ryan Arabit
        </h1>
        <h2 class="text-lg mt-2 glitch">
          Web Developer | <span class="text-neon-green">Vue and Laravel</span>
        </h2>
        <p class="mt-4 text-left">
          I am a <strong>web developer</strong> who dreams of entering and
          working in the IT industry, utilizing my skills and knowledge in
          technology. I have chosen the path of
          <strong>web development</strong>, particularly focusing on
          <strong>Vue and Laravel.</strong> My aim is to create exceptional
          digital experiences, contribute to innovative projects, and
          continuously expand my expertise in the ever-evolving world of
          <strong>web development.</strong>
        </p>
      </div>
      <img
        ref="pfp"
        class="mb-10 md:mb-0 h-[160px] w-[160px] md:h-[240px] md:w-[240px] rounded-full ml-0 md:ml-10 object-cover"
        src="../components/icons/Portfolio.png"
        alt="Paul Valladares"
      />
    </div>

    <!-- About me -->
  </main>
</template>
