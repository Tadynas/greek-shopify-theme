/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./sections/**/*.liquid', './snippets/**/*.liquid'],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}
