/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      
      margin: {
        custom: "37rem",
},
      height: {
        '608': '608px',
      },
      width:{
        '600':'600px',
           '70': "300px",
      },
      border:{
        '1':'1px',

      },
    },
  },
  plugins: [require("daisyui")],
}