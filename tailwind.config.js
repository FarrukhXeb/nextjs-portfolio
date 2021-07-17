module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rochester: ['"Rochester"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
