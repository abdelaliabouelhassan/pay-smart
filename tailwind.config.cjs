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
      },
      boxShadow: {
        'card': '0px 50px 40px 5px rgba(29, 29, 29, 0.05)',
      }
    },
  },
  plugins: [],
}
