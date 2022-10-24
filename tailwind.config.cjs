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
      //bounce animation
      keyframes: {
        
        'bounce-ethereum3': {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'bounce-solana': {
          '0%, 100%': { transform: 'translateY(-50%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '30%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'bounce-wallex': {
          '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '60%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'bounce-tether':{
          '0%, 100%': { transform: 'translateY(-60%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'bounce-bitcoin':{
          '0%, 100%': { transform: 'translateY(-30%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '70%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        }


      },
      animation: {
        'bounce-ethereum3': 'bounce-ethereum3 1.5s infinite',
        'bounce-solana': 'bounce-solana 1.5s infinite',
        'bounce-wallex': 'bounce-wallex 1.5s infinite',
        'bounce-tether': 'bounce-tether 1.5s infinite',
        'bounce-bitcoin': 'bounce-bitcoin 2s infinite',
      },
      //3xl screen size height
      screens: {
        '3xl': '2000px',
        'tall': {'raw': '(min-height: 1400px)'},
        'tallmin': {'raw': '(min-height: 1000px)'},
        'tallMax': {'raw': '(min-height: 1800px)'},
      },
        
    },
  },
  plugins: [],
}
