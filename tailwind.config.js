module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#222222",
        third: "#E3B27D",
        fourth: "#FFFFFF",
        fifth: "#CCCCCC",
        sixth: "#888888",
        background: "#111111",
        customGray: "#333333",
      },
      backgroundColor: {
        customSectionBg: "#181818",
      },
      spacing: {
        navHeight: "5rem",
      },
      screens: {
        xsm: "500px",
      },
      fontSize: {
        "9xl": ["9.5rem", "10rem"],
      },
    },
  },
  plugins: [],
};
