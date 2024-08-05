/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        default: '.25em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

