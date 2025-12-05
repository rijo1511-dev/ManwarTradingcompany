/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /* Updated brand palette to match provided bright green/dark green styling */
        brand: {
          50: '#f2fff2',
          100: '#dfffe0',
          200: '#c6ffbf',
          300: '#b0ff9f',
          400: '#90ff6e',
          500: '#7ef32b',
          600: '#68c61f',
          700: '#4b8f16',
          800: '#2f5f0e',
          900: '#173708',
        },
        /* Secondary/dark green used for header and major accents */
        darkgreen: {
          50: '#edf7ef',
          100: '#d6f0d7',
          300: '#9ed9a6',
          500: '#1b3b2d',
          700: '#0b2a1e',
        },
        accent: {
          50: '#f6ffea',
          100: '#efffcb',
          200: '#e6ff9a',
          300: '#dfff5a',
          500: '#d3ff00',
        }
      }
    },
  },
  plugins: [],
};