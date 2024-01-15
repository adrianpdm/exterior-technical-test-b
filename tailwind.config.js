/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {},
    },
    screens: {
      "3xs": "360px",
      // => @media (min-width: 360px) { ... }

      "2xs": "385px",
      // => @media (min-width: 385px) { ... }

      xs: "393px",
      // => @media (min-width: 393px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1366px",
      // => @media (min-width: 1366px) { ... }

      "3xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "4xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "5xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
};
