/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik Maze", "system-ui"]
    },
    backgroundImage:{
      "image": "url('')"
    }
  },
  plugins: [],
}