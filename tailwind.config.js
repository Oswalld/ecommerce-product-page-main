/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/js/index.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Orange': 'hsl(26, 100%, 55%)',
      'Pale-orange': 'hsl(25, 100%, 94%)',
      'Very-dark-blue': 'hsl(220, 13%, 13%)',
      'Dark-grayish-blue': 'hsl(219, 9%, 45%)',
      'Grayish-blue': 'hsl(220, 14%, 75%)',
      'Light-grayish-blue': 'hsl(223, 64%, 98%)',
      'White': 'hsl(0, 0%, 100%)',
      'Black-75': 'hsl(0, 0%, 0%)',
    },
    extend: {},
  },
  plugins: [],
}