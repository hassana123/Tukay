/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          background: "#D6FB00",
          "btn-background": "#00545F",
          "text-dark": "#1E1E1E",
          "text-light": "#FFF",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      lineHeight: {
        normal: "1.5",
      },
    },
  },
  plugins: [],
};
