/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brightGrey': "#374151",
        'pumpkinOrange': "#F97316",
        'sunYellow': "#F9E615",
        'nobel': "#B4B2B2",
        'osloGrey': "#8F8C8C",

      },

      margin: {
        custom: "37rem",
      },
      height: {
        608: "608px",
        480: "30rem",
        1177: "73.563rem",
      },
      width: {
        600: "600px",
        70: "300px",
        512: "32rem",
       
      },
      border: {
        1: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
};
