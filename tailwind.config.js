module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#333333",
          200: "#222222",
          300: "#181818",
          400: "#111111",
        },
        orange: "#E3B27D",
        light: "#CCCCCC",
        gray: "#888888",
      },
      backgroundImage: {
        contact: "url('/src/assets/Contact/bg.png')",
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
