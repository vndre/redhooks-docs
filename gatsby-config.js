const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') }
      }
    },
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./relative/path/to/layout/component')
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
