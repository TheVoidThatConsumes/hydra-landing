/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'Sans-serif']
      },
      colors: {
        'body': ['#302C42']
      }
    },
  },
  plugins: [
    require('./node_modules/tailwind-scrollbar-hide')
  ],
}
