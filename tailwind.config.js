module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#555511",
        secondary: "#222222",
        third: "#E3B27D",
        fourth: "#FFFFFF",
        fifth: "#CCCCCC",
        background: "#111111",
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
