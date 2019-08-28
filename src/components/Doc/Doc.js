import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  exact, arrayOf, string, shape
} from 'prop-types'
import SEO from '../SEO/SEO'

const Doc = ({ data: { doc } }) => {
  const headingTitle = doc.headings[0] && doc.headings[0].value

  return (
    <>
      <SEO
        title={doc.title || headingTitle}
        description={doc.description || doc.excerpt}
      />
      <MDXRenderer>{doc.body}</MDXRenderer>
    </>
  )
}

Doc.propTypes = {
  data: shape({
    doc: exact({
      id: string.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      headings: arrayOf(exact({
        value: string.isRequired
      })).isRequired,
      excerpt: string.isRequired,
      body: string.isRequired
    }).isRequired
  })
}

export default Doc
