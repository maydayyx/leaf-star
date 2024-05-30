/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui'),addDynamicIconSelectors()],
  daisyui: {
    themes: ["winter", "dim"],
    // darakTheme:false
  },
}


