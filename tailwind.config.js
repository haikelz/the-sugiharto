module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg.svg')",
      },
      fontFamily: {
        inter: "Inter",
        sanspro: "Source Sans Pro",
      },
      screens: {
        tablet: "1022px",
      },
    },
  },
  plugins: [],
};
