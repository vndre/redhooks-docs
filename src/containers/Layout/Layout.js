import React from 'react'
import { element } from 'prop-types'
import { Styled } from 'theme-ui'
import { Box } from 'rebass'
import { useStaticQuery, graphql } from 'gatsby'
import { Hero, Global } from '../../components'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { NavMobile } from '..'

const Layout = ({ children }) => {
  const { width } = useWindowDimensions()
  const { allDocs } = useStaticQuery(graphql`
    query docsQuery {
      allDocs {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <Styled.root>
      <Global />
      <Hero />
      <Box
        as='section'
        p={[4, 5, 6]}
        css={{
          position: 'relative'
        }}
      >
        {
          width > 768
            ? <span>dektopmn</span>
            : <NavMobile navItems={allDocs.edges} />
        }
        <Box
          as='article'
          mt={[4, 5, 6]}
        >
          {children}
        </Box>
      </Box>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
