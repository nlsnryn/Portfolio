<script setup>
import { animate } from "motion";
import { PowerGlitch } from "powerglitch";
import { onMounted, onUnmounted, ref } from "vue";

const pfp = ref(null);

const texts = [" collaborate", " innovate", " code!"];
const delay = 2000;
let counter = 0;
const typingText = ref("");
const isCursorVisible = ref(true);

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

const toggleCursor = () => {
  isCursorVisible.value = !isCursorVisible.value;
  setTimeout(toggleCursor, 500);
};

onUnmounted(() => {
  isCursorVisible.value = false;
});

onMounted(() => {
  type();
  toggleCursor();
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

  // animate(
  //   pfp.value,
  //   { y: [-6, 6] },
  //   {
  //     duration: 2,
  //     direction: "alternate",
  //     repeat: 100,
  //     easing: "ease-in-out",
  //   }
  // );
});
</script>

<template>
  <main id="home" class="">
    <!-- Hero Section -->
    <div class="flex flex-col-reverse md:flex-row pt-32">
      <div data-aos="fade-right" data-aos-duration="1000" class="text-white">
        <h1
          class="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white z-10"
        >
          Nelson Ryan Arabit
        </h1>
        <h2 class="text-lg mt-2">
          Web Developer |
          <span class="text-neon-green glitch z-10">Vue and Laravel</span>
        </h2>
        <p class="mt-10 max-w-md text-start z-10">
          I am a <strong>web developer</strong> who dreams of entering and
          working in the IT industry, utilizing my skills and knowledge in
          technology. I have chosen the path of
          <strong>web development</strong> and my aim is to create exceptional
          digital experiences, contribute to innovative projects, and
          continuously expand my expertise in the ever-evolving world of
          <strong>web development.</strong>
        </p>
      </div>
      <img
        class="grayscale opacity-10 md:opacity-30 mb-10 md:mb-0 md:h-auto md:w-[23rem] absolute right-0 top-16 rounded-full ml-0 md:ml-10 object-cover self-center z-0"
        src="../assets/images/nobg2.png"
        alt="Nelson"
      />
    </div>

    <!-- Resume -->
    <div class="mt-5">
      <a
        href="../assets/images/capstone.png"
        download
        class="group text-gray-300 border-2 hover:border-neon-green w-fit text-[11px] flex items-center justify-center font-medium rounded-lg bg-transparent px-3 md:px-4 py-1.5 cursor-pointer transition-all ease-in-out duration-200"
      >
        <h1
          class="text-sm md:text-lg group-hover:text-neon-green tracking-tighter"
        >
          Resume
        </h1>
        <i
          class="fa-solid fa-download group-hover:text-neon-green text-sm md:text-lg ml-2"
        ></i>
      </a>
    </div>

    <!-- Let work -->
    <div data-aos="fade-up" data-aos-duration="2000" class="mt-16 md:mt-24">
      <h1
        id="text-animation"
        class="text-2xl md:text-3xl font-semibold tracking-wider text-white uppercase"
      >
        LET'S
        <span class="text-3xl md:text-4xl text-neon-green">{{
          typingText
        }}</span>
        <span
          class="cursor"
          :class="{ 'cursor-blink': isCursorVisible }"
        ></span>
      </h1>
    </div>

    <!-- Tech Stack -->

    <div data-aos="fade-up" data-aos-duration="2000">
      <div class="flex flex-wrap items-center gap-x-5 mt-5 justify-start">
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
        <!-- <a href="https://www.php.net" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
              alt="php"
              width="40"
              height="40"
            />
          </a> -->
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
  </main>
</template>

<style>
.cursor {
  width: 2px;
  height: 1.2em;
  background-color: white;
  display: inline-block;
}

.cursor-blink {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
