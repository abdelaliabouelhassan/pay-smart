/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'PlusJakartaSans': ['PlusJakartaSans', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
