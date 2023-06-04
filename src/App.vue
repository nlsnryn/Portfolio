<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <main class="w-11/12 mx-auto">
    <header>
      <Navbar />
    </header>

    <RouterView />
  </main>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
