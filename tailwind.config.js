/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: { mycustom: "70fr 30fr" },
    },
  },
  plugins: [],
};
