/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.6rem',
      },
      textColor: {
        'thirst-blue': '#252a69',
        'thirst-grey': '#cacaca',
      },
      ringColor: {
        'thirst-blue': '#252a69',
      },
      backgroundColor: {
        'thirst-blue': '#252a69',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

