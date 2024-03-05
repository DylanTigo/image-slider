/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#111',
        'white' : '#f1f1f1',
      },
      fontFamily: {
        'sans' : ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}