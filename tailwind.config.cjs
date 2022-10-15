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
      },
      //bg radial gradient
      backgroundImage: theme => ({
        'dark-gradient': "radial-gradient(148.62% 210.62% at 50% 100%, #282828 11.49%, #030303 100%)",
        'light-gradient': "radial-gradient(118.87% 80.16% at 55.45% 80.16%, #73ADF1 0%, #196ECF 100%) ",
      }),
    },
  },
  plugins: [],
}
