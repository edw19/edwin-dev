const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      indigo: colors.indigo,
      gray: colors.gray,
      white: colors.white,
      blue: {
        100: "#081456"
      },
      transparent: 'transparent'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
