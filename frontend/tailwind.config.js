/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: '#FCFBF7',       // Main Soft Light Background
        creamLight: '#F5EFEB',  // Soft Card / Section Background
        champagne: '#DDA7A5',   // Rose Champagne Accent
        champagneDark: '#C28381',
        espresso: '#24141E',    // Contrast Text
        warmMuted: '#6D5B66',   // Paragraph Subtitles
      },
      boxShadow: {
        'softGlow': '0 10px 30px rgba(221, 167, 165, 0.25)',
        'luxuryCard': '0 8px 30px rgba(36, 20, 30, 0.05)',
      }
    },
  },
  plugins: [],
}