/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red:"#D82800",
        white:"#FFFFFF",
        black:"#000000",
        buttoncard: "#3a3a3a"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}