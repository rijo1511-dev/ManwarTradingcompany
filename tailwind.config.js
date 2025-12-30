/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand palette updated to match image (soft creams and blue palette) */
        brand: {
          50: '#f4f8ff',
          100: '#e7f0ff',
          200: '#c9deff',
          300: '#a8caff',
          400: '#8ea8ff',
          500: '#84a8ff',
          600: '#6f8de6',
          700: '#5570ba',
          800: '#3b4f91',
          900: '#22325f',
          950: '#2D3C6C',

        },
        /* Soft cream/neutral palette */
        cream: {
          50: '#fffaf3',
          100: '#fff6dd',
          200: '#fff1c4',
          300: '#ffe9a8',
          400: '#ffe18c',
          500: '#ffd78a',
        },
        /* Deep text/nav color (navy) */
        navy: {
          50: '#f4f7fb',
          100: '#e9eef8',
          200: '#c9d8f2',
          300: '#9fb2e2',
          500: '#22325f',
          700: '#152239',
        }
      }
    },
  },
  plugins: [],
};