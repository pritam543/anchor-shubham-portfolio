/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepWine: '#260812',       // Darkest Luxury Background
        burgundy: '#4A1022',       // Rich Royal Sections & Cards
        roseGold: '#C98F8F',       // Primary Metallic Accent / Buttons
        dustyRose: '#D9A6A8',      // Soft Borders & Highlights
        cream: '#FFF5EA',          // Primary Crisp Text
        nudeBeige: '#E8D5C4',      // Secondary Body Text & Subtitles
      },
      boxShadow: {
        'roseGlow': '0 0 25px rgba(201, 143, 143, 0.3)',
        'wineGlow': '0 10px 30px -10px rgba(38, 8, 18, 0.8)',
      }
    },
  },
  plugins: [],
}