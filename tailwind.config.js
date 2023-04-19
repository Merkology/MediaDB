/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color:{
        "red": "#F92120",
        "main-bg": "#2F3136",
        "main-nav": "#202225",
        "mdb-purple": "#6366F1"
      }
    },
  },
  plugins: [],
}
