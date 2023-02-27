/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-logo": "#63c7fb",
        "violet-logo": "#815bfb",
      },
      backgroundImage: (theme) => ({
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        neon: ["Tilt Neon", "cursive"]
      },
      content: {
        tentacules: "url('./assets/tentacules.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
