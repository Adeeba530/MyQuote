/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        et: [
          'et-book',
          'Palatino',
          '"Palatino Linotype"',
          '"Palatino LT STD"',
          '"Book Antiqua"',
          'Georgia',
          'serif',
        ],
      },
      colors: {
        deep: '#0b1220',
      },
    },
  },
  plugins: [],
};