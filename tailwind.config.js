/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '608': '608px',
      },
      width:{
        '600':'600px',
      },
      border:{
        '1':'1px',
      },
    },
  },
  plugins: [require("daisyui")],
}