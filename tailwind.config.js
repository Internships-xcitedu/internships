/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'mobileMd': '375px',
        'mobileLg': '425px',
        'tablet': '768px',
        'laptopSm': '800px',
        'laptopMd': '1024px',
        'laptopLg': '1280px',
        'desktopSm': '1366px',
        'desktopMd': '1440px',
        'desktopLg': '1920px',
      },
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
        512: "20rem",
        480: "30rem",
       
      },
      border: {
        1: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
};
