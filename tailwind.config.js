const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#512DBC",
      black: "#000000",
      gray: "#C6C6C6",
      white: "#FFFFFF",
      halfWhite: "rgba(255, 255, 255, 0.5)",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("3n", "&:nth-child(3n)");
      addVariant("3n-2", "&:nth-child(3n-2)");
      addVariant("4n-3", "&:nth-child(4n-3)");
      addVariant("4n", "&:nth-child(4n)");
      addVariant("first-item", "&:nth-child(1)");
      addVariant("second-item", "&:nth-child(2)");
      addVariant("third-item", "&:nth-child(3)");
    }),
  ],
};
