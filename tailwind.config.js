/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#0303B5",
        secundary:"#ed8900",
    },
    container:{
      center: true,
      padding:{
        default:"1rem",
        sm:"3rem",
      }
    }
  },
},
  plugins: [],
}

