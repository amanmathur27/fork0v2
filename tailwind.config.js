/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      textStroke: {
        'default': '1px black', // You can customize the default stroke
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        transparent: 'transparent',

        //Shades of Black
        midnightBlue: "#101720",
        deepNavyBlue: "#011222",
        charcoalGray: "#171717",
        richBlack: "#020D19",
        oilBlack: "#0C0C0C",
        darkSlateGray: "#0D1717",
        obsidian: "0B1215",

        //SHades of White
        ghostWhite: "#F8F8FF",
        ivory: "#FFFFF0",
        snow: "#FFFAFA",
        offWhite: "#FAF9F6"
      },
      fontFamily: {
        FiraCode: ["Fira Code", "monospace"],
        Peta: ["Lexend Peta", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-transparent': {
          'color': 'transparent',
        },
      });
    }
  ],
};




