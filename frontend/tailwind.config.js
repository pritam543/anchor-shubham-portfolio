/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF5EA',       // 60% Main Base
        nudeBeige: '#E8D5C4',   // Alternate Section & Soft Dividers
        burgundy: '#4A1022',    // 20% Headings & Premium Accents
        deepWine: '#260812',    // 10% Nav, Footer & High-Contrast Sections
        roseGold: '#C98F8F',    // 10% Buttons & Highlights
        dustyRose: '#D9A6A8',
      },
      boxShadow: {
        'roseGlow': '0 4px 20px rgba(201, 143, 143, 0.35)',
        'luxuryCard': '0 10px 30px rgba(38, 8, 18, 0.08)',
      }
    },
  },
  plugins: [],
}