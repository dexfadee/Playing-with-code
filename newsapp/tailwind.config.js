/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xs': '400px',
      'md': '800px',
      'lg': '950px'
    },
    extend: {
    },
  },
  plugins: [],
}

