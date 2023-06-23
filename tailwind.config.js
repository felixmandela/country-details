/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        100: "25rem",
        250: "62.5rem",
      },
    },
  },
  plugins: [],
};
