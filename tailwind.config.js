/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FEFEF6",
        nero: "#282828",
        spray: "#83D8D8"
      }
    },
  },
  plugins: [],
}