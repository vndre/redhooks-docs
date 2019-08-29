import React from 'react'
import {
  arrayOf, exact, string, object, shape
} from 'prop-types'
import { Box } from 'rebass'
import { rem } from 'polished'
import { Link } from 'gatsby'

const isActive = ({ isCurrent }) => (
  isCurrent
    ? {
      style: {
        color: '#fb6b6b'
      }
    }
    : null
)

const NavItems = ({ items, UlProps = {}, LiProps = {} }) => (
  <Box
    as='ul'
    p={4}
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
          <Link
            to={node.slug}
            getProps={isActive}
            css={{
              color: '#080808',
              display: 'inline-block',
              fontWeight: 'bold',
              marginBottom: rem('15px'),
              textDecoration: 'none',
              textTransform: 'capitalize',
              '&:hover': {
                color: '#fb6b6b'
              }
            }}
          >
            {
              node.title === 'index'
                ? 'introduction'
                : node.title
            }
          </Link>
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
  LiProps: object
}

export default NavItems
