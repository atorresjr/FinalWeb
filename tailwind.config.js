module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors: require('daisyui/colors'),},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}
