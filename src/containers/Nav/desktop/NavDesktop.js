import React from 'react'
import { Box } from 'rebass'
import { arrayOf, object } from 'prop-types'
import { rem } from 'polished'
import { NavItems } from '../../../components'

const NavDesktop = ({ navItems }) => {
  const itemClickAction = () => {
    document.getElementById('content').scrollIntoView()
  }

  return (
      <Box
        as='nav'
        bg='text'
        mr={4}
        css={{
          flexShrink: 0,
          maxWidth: rem('300px'),
          position: 'sticky',
          top: rem('10px')
        }}
      >
        <NavItems
          items={navItems}
          clickAction={itemClickAction}
          invertedItems
        />
      </Box>
  )
}

NavDesktop.propTypes = {
  navItems: arrayOf(object).isRequired
}

export default NavDesktop
