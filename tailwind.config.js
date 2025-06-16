/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      fontFamily: {
        zelda: ['"Hylia Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
