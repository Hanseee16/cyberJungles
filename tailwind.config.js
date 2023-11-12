/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: "5rem",
    },
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('src/assets/img/hero/background.svg')",
        historySatu: "url('src/assets/img/history/section.png')",
      },
      dropShadow: {
        boom: "0px 5px 3px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
