import React from 'react'
import { element } from 'prop-types'
import { Styled } from 'theme-ui'
import { Global } from '@emotion/core'
import Hero from '../Hero/Hero'

const Layout = ({ children }) => (
  <Styled.root>
    <Global
      styles={(theme) => ({
        body: {
          color: theme.colors.text,
          margin: 0,
          backgroundColor: theme.colors.background
        },
        '*': {
          boxSizing: 'border-box'
        }
      })}
    />
    <Hero />
    <article>
      {children}
    </article>
  </Styled.root>
)

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
