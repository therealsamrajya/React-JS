/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        primary: "#6F61C0",
        secondary: "#A084E8",
        one: "#8BE8E5",
        second: "#D5FFE4",
      },
    },
  },
  plugins: [],
};
