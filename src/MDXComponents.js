/* eslint-disable react/display-name, react/prop-types */

import React from 'react'
import Prism from '@theme-ui/prism'

export default {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  h1: (props) => (
    <h1 {...props}>{props.children}</h1>
  )
}
