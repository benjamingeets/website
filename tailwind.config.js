module.exports = {
  purge: [
    './src/*.html',
    './src/*.njk',
    './src/_includes/*.njk',
    './src/portfolio/*.njk',
    '.src/portfolio/*.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
