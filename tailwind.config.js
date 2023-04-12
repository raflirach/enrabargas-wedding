/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#7D5A50",
        primary: "#FCDEC0",
        secondary: "#B4846C"
      },
      fontFamily: {
        alice: ["Alice", "serif"],
        fira: ['Fira Sans', "sans-serif"]
      },
    },
  },
  plugins: [],
}
