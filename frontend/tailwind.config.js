/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepWine: '#260812',
        burgundy: '#4A1022',
        roseGold: '#C98F8F',
        dustyRose: '#D9A6A8',
        cream: '#FFF5EA',
        nudeBeige: '#E8D5C4',
      },
      boxShadow: {
        'roseGlow': '0 0 25px rgba(201, 143, 143, 0.35)',
        'wineShadow': '0 12px 35px -10px rgba(38, 8, 18, 0.9)',
      }
    },
  },
  plugins: [],
}