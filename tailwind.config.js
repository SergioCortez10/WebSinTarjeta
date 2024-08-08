/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'titillium': ["titillium", "sans-serif"]
      },
      colors:{
        'CoOscuro' : '#495055',
        'CoClaro' : '#82A938'
      }
    },
  },
  plugins: [],
}