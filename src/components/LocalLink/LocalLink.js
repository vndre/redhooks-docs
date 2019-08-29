import React from 'react'
import { string, func, bool } from 'prop-types'
import { Link } from 'gatsby'
import theme from '../../theme'

const isActive = ({ isCurrent }) => (
  isCurrent
    ? {
      style: {
        color: theme.colors.primary
      }
    }
    : null
)

const LocalLink = ({
  text,
  to,
  clickAction = undefined
}) => (
  <Link
    to={to}
    getProps={isActive}
    css={{
      color: theme.colors.background,
      display: 'inline-block',
      fontWeight: 'bold',
      textDecoration: 'none',
      textTransform: 'capitalize',
      transition: 'color 300ms ease-in-out',
      '&:hover': {
        color: theme.colors.primary
      }
    }}
  >
    {
      clickAction !== undefined
        ? (
          <span onClick={clickAction}>{text}</span>
        )
        : text
    }
  </Link>
)

LocalLink.propTypes = {
  text: string.isRequired,
  to: string.isRequired,
  clickAction: func,
  inverted: bool
}

export default LocalLink
