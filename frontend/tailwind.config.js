/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stageBg: '#050811',      // Royal Midnight Stage Black
        stageCard: '#0c1322',    // Deep Stage Navy
        stageBorder: '#1c2842',  // Soft Slate Border
        goldAccent: '#dfb15b',   // Liquid Stage Gold
        goldLight: '#ffd57a',    // Glow Gold Hover
        stageTextMuted: '#9aa5be',
      },
      boxShadow: {
        'goldGlow': '0 0 25px rgba(223, 177, 91, 0.25)',
        'cardGlow': '0 10px 30px -10px rgba(0,0,0,0.6)',
      }
    },
  },
  plugins: [],
}