module.exports = {
  siteMetadata: {
    title: 'Redhooks',
    description: 'Redhooks is a tiny React utility library for holding a predictable state container in your React apps.'
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [require('remark-emoji')]
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/Layout.js')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs`
      }
    }
  ]
}
