
const env = process.env.NODE_ENV

function config(api) {
  api.cache(true)

  const presets = [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }
    ],
    [
      '@emotion/babel-preset-css-prop',
      {
        sourceMap: env === 'development'
      }
    ]
  ]

  const plugins = []

  return {
    presets,
    plugins
  }
}

module.exports = config
