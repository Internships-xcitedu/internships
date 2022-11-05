/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        70: "300px",
      },
      margin: {
        custom: "37rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
