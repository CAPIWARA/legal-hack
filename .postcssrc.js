const { browserslist: browsers } = require('./package')

module.exports = {
  plugins: {
    'cssnano': {},
    'autoprefixer': { browsers },
    'postcss-nested': {},
    'postcss-css-variables': { preserve: true }
  }
}
