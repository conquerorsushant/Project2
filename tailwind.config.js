/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000e23",
        secondary: "#010a18",
      },
      fontFamily: {
        sansation: ["Sansation", "sans-serif"],
      },
      screens: {
        xs: { max: "350px" }, // Custom breakpoint for phones <= 400px
      },
    },
  },
  plugins: [],
};
