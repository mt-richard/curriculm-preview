/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        cornflowerblue: "rgba(23, 126, 213, 0.68)",
        darkslateblue: "#005faf",
        steelblue: {
          "100": "#3794c8",
          "200": "#007dc3",
          "300": "#005da6",
        },
        dodgerblue: "#2699fb",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "51xl": "70px",
      "6xl": "25px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
