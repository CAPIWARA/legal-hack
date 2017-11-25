const { browserslist: browsers } = require('./package')

module.exports = {
  plugins: {
    'autoprefixer': { browsers },
    'postcss-nested': {},
    'postcss-css-variables': { preserve: true }
  }
}
