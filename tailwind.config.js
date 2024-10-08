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
      inset: {
        '-16': '-4rem',
      },
      height: {
        '128': '34rem',
        '800': '50rem',
        '9/100': '90%'
      },
      letterSpacing: {
        'link': '.2rem',
        default: '.25em',
        'title': '1rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
