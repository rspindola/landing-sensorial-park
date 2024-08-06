/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'design-gray': '#767c75',
        'black': '#1e2326',
        'yellow-woods': '#b8af45',
        'input': '#848983'
      },
      height: {
        '128': '34rem',
        '9/100': '90%'
      },
      letterSpacing: {
        default: '.25em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
