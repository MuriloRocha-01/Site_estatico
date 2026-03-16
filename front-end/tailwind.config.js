/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#e60000",
        white: "#FFFFFF",
        black: "#000000",
        buttoncard: "#3a3a3a"
      },
      fontFamily: {
        // Ao definir 'sans', ela se torna a fonte padrão do Tailwind
        sans: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
