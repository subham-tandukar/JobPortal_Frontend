/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      heading: ["Archivo", "sans-serif"],
    },
    colors: {
      primary: "#01615B",
      black: "#111",
      white: "#fff",
      transparent: "transparent",
      current: "currentColor",
      gray: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#9fa6b2",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    extend: {
      screens: {
        laptop: { max: "1440px" },
        medium: { max: "959px" },
        small: { max: "768px" },
        xsmall: { max: "500px" },
      },
    },
  },
  plugins: [],
};
