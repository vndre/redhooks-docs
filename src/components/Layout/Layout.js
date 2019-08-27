import React from 'react'
import { element } from 'prop-types'

const Layout = ({ children }) => (
  <div>
    <h1>header</h1>
    {children}
  </div>
)

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
