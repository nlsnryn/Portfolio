import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavbarStore = defineStore("navbar", () => {
  const activedButton = ref(localStorage.getItem("navigation"));

  function navClick(navbars) {
    activedButton.value = navbars;
    localStorage.setItem("navigation", navbars);
    activedButton.value = localStorage.getItem("navigation");
  }

  return {
    activedButton,
    navClick,
  };
});
