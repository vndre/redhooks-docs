import React, { useState } from 'react'
import { Flex, Box, Button } from 'rebass'
import { arrayOf, object } from 'prop-types'
import { ReactComponent as MenuIcon } from '../../../assets/svg/bookmark.svg'
import { ReactComponent as GitIcon } from '../../../assets/svg/git-fork.svg'
import { NavItems } from '../../../components'

const NavMobile = ({ navItems }) => {
  // eslint-disable-next-line
  const [open, setOpen] = useState(false)

  return (
    <>
      <Flex
        as='header'
        alignItems='center'
      >
        <Button
          sx={{
            pl: 0,
            p: 2
          }}
        >
          <MenuIcon
            css={{
              fill: '#080808'
            }}
          />
        </Button>
        <Button
          variant='primary'
          pr={0}
          p={2}
          ml='auto'
          bg='transparent'
          sx={{
            display: 'flex',
            border: ({ colors }) => `1px solid ${colors.text}`
          }}
        >
          <GitIcon
            css={{
              fill: '#080808'
            }}
          />
        </Button>
      </Flex>
      <Box
        as='nav'
        bg='background'
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          boxShadow: ({ shadows }) => shadows.large
        }}
      >
        <NavItems items={navItems} />
      </Box>
    </>
  )
}

NavMobile.propTypes = {
  navItems: arrayOf(object).isRequired
}

export default NavMobile
