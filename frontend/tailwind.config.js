module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // o 'media' o 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ]
}
