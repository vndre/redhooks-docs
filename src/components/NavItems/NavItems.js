import React from 'react'
import {
  arrayOf, exact, string, object, shape, func, bool
} from 'prop-types'
import { Box } from 'rebass'
import LocalLink from '../LocalLink/LocalLink'

const NavItems = ({
  items,
  UlProps = {},
  LiProps = {},
  clickAction = undefined
}) => (
  <Box
    as='ul'
    p={4}
    sx={{
      '> * + *': {
        mt: 2
      }
    }}
    {...UlProps}
  >
    {
      items.map(({ node }) => (
        <li
          key={node.title}
          css={{
            listStyle: 'none'
          }}
          {...LiProps}
        >
          <LocalLink
            text={node.title === 'index' ? 'introduction' : node.title}
            to={node.slug}
            clickAction={clickAction}
          />
        </li>
      ))
    }
  </Box>
)

NavItems.propTypes = {
  items: arrayOf(
    shape({
      node: exact({
        title: string.isRequired,
        slug: string.isRequired
      })
    })
  ).isRequired,
  UlProps: object,
  LiProps: object,
  clickAction: func,
  invertedItems: bool
}

export default NavItems
