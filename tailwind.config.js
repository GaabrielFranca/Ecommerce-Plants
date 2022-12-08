/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-custom-gray": "#4B4B4B",
        "color-custom-green": "#898C5E",
        "color-custom-black": "#191919",
        "color-custom-white": "#D9D9D9",
      },
      fontFamily: {
        "font-title": ["Antic", "sans-serif"],
        "font-subtitle": ["Mukta", "sans-serif"],
        "font-text": ["Antic", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
