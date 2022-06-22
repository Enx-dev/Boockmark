/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "375px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      screens: {
        tab: "768px",
      },
      lineHeight: {
        heading: "40px",
      },
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
