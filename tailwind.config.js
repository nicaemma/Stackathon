/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        sunrise: ["Waiting for the Sunrise", "cursive"],
        nextDoor: ["The Girl Next Door", "cursive"],
        gaegu: ["Gaegu", "cursive"],
        grape: ["Grape Nuts", "cursive"],
        dawning: ["Dawning of a New Day", "cursive"],
        stalemate: ["Stalemate", "cursive"],
      },
    },
  },
  plugins: [],
};
