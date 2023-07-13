<script setup>
import { ref } from "vue";

const about = ref(["A", "b", "o", "u", "t", " ", "M", "e"]);
</script>

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
    <p class="font-medium text-start mt-5 style-text">
      I am a Bachelor of Science in Information Technology graduate, a highly
      motivated person with a passion for continuous growth. I have two years of
      programming experience and continue to expand my knowledge about the
      rapidly evolving world of web technology. During my college studies, I
      worked as a capstone programmer within our group, and I also gained
      valuable experience as a Laravel API developer during my internship. I am
      currently learning Vue JS and Laravel to become a full-stack developer and
      improve my web development skills by creating projects using these
      frameworks. My goal is to become a web developer, apply my programming
      knowledge to enhance my skills, and contribute to a company's success. I
      am currently seeking full-time employment opportunities and ready to start
      working.
    </p>

    <div class="flex flex-col md:flex-row mt-8 md:mt-20 gap-10 style-text">
      <div class="w-full md:w-1/2">
        <h1 class="text-lg font-medium tracking-tighter uppercase">
          Work Experience
        </h1>
        <h2 class="text-xs font-semibold uppercase text-neon-green mt-2">
          Web Developer Intern | Neksjob Corp.
        </h2>
        <h1 class="text-xs font-medium uppercase">Jan - April 2023</h1>
        <p class="text-start mt-5">
          As a web developer intern, I'm maintaining and enhancing company
          websites, created some features to enable employers to efficiently
          monitor applicants. I excel in creating APIs and managing tokens to
          facilitate seamless integration with the systems I build. Through my
          work, I have extensively explored and utilized technologies such as
          Laravel API, Sanctum, Postman, JWT, and honed my searching skills to
          deliver exceptional results.
        </p>

        <ul class="text-start mt-5 text-gray-300 list-disc ml-3">
          <li>Built a Laravel REST API project</li>
          <li>Used postman to test API endpoints</li>
          <li>
            Used bitbucket as our web-based version control repository hosting
            service
          </li>
          <li>Created token management to generate from client side</li>
          <li>Used JWT for Token Expiration</li>
          <li>Fixed some UI from company website</li>
          <li>
            Created one feature from scratch from their website to enable
            employers monitor their applicants
          </li>
          <li>
            Used Tools: Laravel, Blade Templates, Bootstrap, Restful APIs,
            MySQL, Postman, Git, Bitbucket
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 -mt-1">
        <h1 class="text-lg font-medium tracking-tighter uppercase">
          Education
        </h1>
        <div class="college">
          <h2 class="text-xs font-semibold uppercase text-neon-green mt-2">
            Bachelor of Science in Information Technology
          </h2>
          <h3 class="text-xs font-medium uppercase text-gray-300">
            University of Rizal System
          </h3>
          <h1 class="text-xs font-medium uppercase">2019 - 2023</h1>
          <ul class="style-text list-disc list-inside text-gray-300 mt-5">
            <li>2nd yr to 4th yr Dean's Lister</li>
            <li>Capstone project Programmer</li>
            <li>QPA 1.46</li>
          </ul>
        </div>

        <div class="shs mt-5">
          <h2 class="text-xs font-semibold uppercase text-neon-green mt-2">
            Information Communication Technology
          </h2>
          <h3 class="text-xs font-medium uppercase text-gray-300">
            Margarito A. Duavit National High School
          </h3>
          <h1 class="text-xs font-medium uppercase">2017 - 2019</h1>
        </div>
      </div>
    </div>
  </section>
</template>
