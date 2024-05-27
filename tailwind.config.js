module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'emerald': '#50C878',
        'dark-emerald': '#37966F',
        'white': '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
