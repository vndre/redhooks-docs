import React, { useEffect } from 'react'
import { Box, Button } from 'rebass'
import {
  arrayOf, object, bool, func
} from 'prop-types'
import anime from 'animejs/lib/anime.min'
import { rem, cover } from 'polished'
import { ReactComponent as MenuIcon } from '../../../assets/svg/bookmark.svg'
import { NavItems } from '../../../components'
import theme from '../../../theme'

const NavMobile = ({ navItems, open, setOpen }) => {
  useEffect(() => {
    anime({
      targets: '#memenu',
      left: open ? '0%' : '-100%',
      duration: 300,
      easing: 'easeInCubic'
    })

    const overlayTL = anime.timeline({
      targets: '#memenu-overlay'
    })

    overlayTL
      .add({
        translateX: open ? '0%' : '-100%',
        duration: 50
      })
      .add({
        opacity: open ? '0.1' : '0',
        duration: 500
      })
  }, [open])

  const itemClickAction = () => {
    setOpen()
    document.getElementById('content').scrollIntoView()
  }

  return (
    <>
      <Button
        variant='primary'
        pl={0}
        p={2}
        bg='transparent'
        sx={{
          display: 'flex'
          // border: ({ colors }) => `1px solid ${colors.text}`
        }}
        onClick={setOpen}
      >
        <MenuIcon
          css={{
            fill: theme.colors.text,
            width: rem('32px'),
            height: rem('32px')
          }}
        />
      </Button>
      <Box
        id='memenu-overlay'
        onClick={setOpen}
        css={{
          ...cover(),
          background: theme.colors.text,
          zIndex: 100
        }}
      >
      </Box>
      <Box
        id='memenu'
        as='nav'
        bg='text'
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '-100%',
          zIndex: 150
        }}
      >
        <NavItems
          items={navItems}
          clickAction={itemClickAction}
        />
      </Box>
    </>
  )
}

NavMobile.propTypes = {
  navItems: arrayOf(object).isRequired,
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default NavMobile
