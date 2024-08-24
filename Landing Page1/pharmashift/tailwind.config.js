/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px', // Custom breakpoint for >400px
        'sm': '600px', // Custom breakpoint for >600px
      },
    },
  },
  plugins: [],
}

