/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bodyBg: "#f3f4f6",
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#ffffff",
        gray: {
          50: "#f9fafb",
          100: "#E5E7EB",
          200: "#D1D5DB",
          300: "#9CA3AF",
          400: "#E5E7EB",
        },
        mainBlue: "#1E293B",
        darkBlue: "#1D335A",
        extendedBlue: "#94A3B8",
      },
      backgroundImage: {
        galatasaray: "url('/src/assets/features/gs.svg')",
      },
    },
  },
};
