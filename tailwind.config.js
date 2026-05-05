/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#E1F5EE",
          100: "#9FE1CB",
          600: "#1D9E75",
          700: "#0F6E56",
          800: "#085041",
        },
        coral: {
          50:  "#FAECE7",
          400: "#F0997B",
          600: "#D85A30",
          700: "#993C1D",
        },
        navy: {
          900: "#1A2D3D",
        },
        cream: {
          50: "#FAF7F0",
        },
        ink: {
          400: "#888780",
          600: "#5F5E5A",
          900: "#2C2C2A",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
