import React from 'react'
import { graphql } from 'gatsby'
import { object } from 'prop-types'

import { Doc } from '../components'

export const pageQuery = graphql`
  query($id: String!) {
    doc: docs(id: { eq: $id }) {
      id
      title
      description
      excerpt
      body
      headings {
        value
      }
    }
  }
`

const DocTemplate = ({ data }) => (
  <Doc data={data} />
)

DocTemplate.propTypes = {
  data: object.isRequired
}

export default DocTemplate
