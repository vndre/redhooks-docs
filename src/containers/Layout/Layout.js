import React, { useState, useCallback } from 'react'
import { element } from 'prop-types'
import { Styled } from 'theme-ui'
import { Flex, Box } from 'rebass'
import { useStaticQuery, graphql } from 'gatsby'
import { Hero, Global } from '../../components'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { NavMobile, NavDesktop } from '..'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { width } = useWindowDimensions()
  const isDesktop = width > 768
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

  const toggleMenu = useCallback(
    () => setMenuOpen((o) => !o),
    [menuOpen],
  )

  return (
    <Styled.root
      css={{
        overflowY: menuOpen ? 'hidden' : 'auto',
        height: '100vh'
      }}
    >
      <Global />
      <Hero />
      <Flex
        as='section'
        id='content'
        p={[4, 5]}
        flexDirection={!isDesktop ? 'column' : 'row'}
        alignItems='flex-start'
        css={{
          position: 'relative',
          height: menuOpen ? '100vh' : 'auto'
        }}
      >
        {
          width > 768
            ? <NavDesktop navItems={allDocs.edges} />
            : <NavMobile
              navItems={allDocs.edges}
              open={menuOpen}
              setOpen={toggleMenu}
            />
        }
        <Box
          as='article'
          mt={!isDesktop ? 4 : 0}
          width='100%'
        >
          {children}
        </Box>
      </Flex>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
