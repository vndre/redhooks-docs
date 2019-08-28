import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { string } from 'prop-types'

const SEO = ({ title, description }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const fullTitle = () => {
    if (title && title !== 'index') {
      return `${title} | ${siteMetadata.title}`
    }
    return siteMetadata.title
  }

  return (
    <Helmet>
      <title>{fullTitle()}</title>
      <meta name="title" content={fullTitle()} />
      <meta name="description" content={description || siteMetadata.description} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: string.isRequired,
  description: string.isRequired
}

export default SEO
