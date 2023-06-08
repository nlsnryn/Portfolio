/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#87CB49",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
