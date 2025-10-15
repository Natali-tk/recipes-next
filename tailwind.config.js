// tailwind.config.js

const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}./ node_modules /@heroui/theme/dist / components / navbar.js",
    "./node_modules/@heroui/theme/dist/components/(form|input|modal|navbar).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};