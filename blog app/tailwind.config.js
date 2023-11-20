/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1D7874",
        dark:{
          light:"#5A7184",
          hard:"#074E22",
        soft:"#679289",
      },
      },
      fontsFamily:{
        roboto:["'Roboto'", "sans-serif"],
        opensans:["'Open Sans'", "sans-serif"],
      }
    },
  },
  plugins: [],
}


