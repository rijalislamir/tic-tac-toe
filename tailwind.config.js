/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'palanquin-dark': ['Palanquin Dark', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
