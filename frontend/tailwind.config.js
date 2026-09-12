/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stageDark: '#0a0a0f',
        stageCard: '#13131c',
        goldAccent: '#d4af37',
        goldHover: '#f5cc5a',
      }
    },
  },
  plugins: [],
}