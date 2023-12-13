/** @type {import('tailwindcss').Config} */
export default {
  bgColor: false,
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue, js, jsx, ts, tsx}",
  ],

  plugins: [
    require('@tailwindcss/forms'),
  ],
}

