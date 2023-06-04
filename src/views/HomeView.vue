<script setup>
import { animate } from "motion";
import { PowerGlitch } from "powerglitch";
import { onMounted, ref } from "vue";

const pfp = ref(null);

const texts = [
  " WORK TOGETHER TO BUILD SOMETHING GREAT!",
  " collaborate, innovate, and code",
  " build backend brilliance",
];
const delay = 2000;
let counter = 0;
const typingText = ref("");

const type = () => {
  const text = texts[counter];
  let index = 0;

  const typeCharacter = () => {
    typingText.value += text[index];
    index++;

    if (index === text.length) {
      setTimeout(erase, delay);
      return;
    }

    setTimeout(typeCharacter, 100);
  };

  const erase = () => {
    if (index === 0) {
      counter++;
      if (counter === texts.length) {
        counter = 0;
      }
      setTimeout(type, delay);
      return;
    }

    typingText.value = text.slice(0, index);
    index--;
    setTimeout(erase, 100);
  };

  typeCharacter();
};

onMounted(() => {
  type();
});

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
  <main class="pb-20">
    <!-- Hero Section -->
    <div
      class="flex flex-col-reverse md:flex-row justify-center items-center mt-14"
    >
      <div class="text-white w-[350px] md:w-[450px]">
        <h1
          class="font-bold text-3xl md:text-5xl tracking-tight mb-1 glitch text-white"
        >
          Nelson Ryan Arabit
        </h1>
        <h2 class="text-lg mt-2 glitch">
          Web Developer | <span class="text-neon-green">Vue and Laravel</span>
        </h2>
        <p class="mt-10 text-left">
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

    <!-- Let work -->
    <div
      class="flex flex-col-reverse md:flex-row justify-center items-center mt-16 md:mt-28"
    >
      <div class="text-white w-[350px] md:w-[730px]">
        <h1
          id="text-animation"
          class="text-2xl font-semibold tracking-wider text-white uppercase"
        >
          LET'S {{ typingText }}
        </h1>
      </div>
    </div>

    <!-- Tech Stack -->

    <div class="flex flex-col-reverse md:flex-row justify-center items-center">
      <div class="text-white w-[350px] md:w-[730px]">
        <div class="flex flex-wrap items-center gap-x-5 mt-10 justify-center">
          <i class="fa-brands fa-html5 text-4xl text-orange-500"></i>
          <i class="fa-brands fa-css3-alt text-4xl text-blue-600"></i>
          <i class="fa-brands fa-square-js text-4xl text-yellow-500"></i>
          <i class="fa-brands fa-laravel text-4xl text-red-500"></i>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="40"
              height="40"
            />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="vuejs"
              width="35"
              height="35"
            />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="40"
              height="40"
            />
          </a>
          <a href="https://www.php.net" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
              alt="php"
              width="40"
              height="40"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
