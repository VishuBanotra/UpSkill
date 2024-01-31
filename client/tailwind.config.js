/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color_1: "#0070F9",
        primary_color_2: "#042FF8",
        primary_white_1: "#FFFFFF",
        yellow_1: "#FBB50E",
      },
      boxShadow: {
        "3xl": "0 0 10px rgba(0, 0, 0, 0.229)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        arvo: ["Arvo", "serif"],
      },
      backgroundImage: {
        "home-img": "url('./assets/HomeImg.jpg')",
      },
      backgroundPosition: {
        "life-easier": 50 % 0,
      },
      backgroundColor: {
        "background-color":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,112,249,1) 0%, rgba(0,212,255,1) 84%)",
      },
    },
  },
  plugins: [],
};
