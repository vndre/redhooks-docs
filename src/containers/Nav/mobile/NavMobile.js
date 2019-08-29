import React, { useEffect, useRef } from 'react'
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
  const menuEl = useRef(null)
  const overlayEl = useRef(null)

  useEffect(() => {
    anime({
      targets: menuEl.current,
      translateX: open ? '0%' : '-110%',
      duration: 400,
      easing: 'easeInCubic'
    })

    const overlayTL = anime.timeline({
      targets: overlayEl.current
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
      <div
        ref={overlayEl}
        onClick={setOpen}
        css={{
          ...cover(),
          background: theme.colors.text
        }}
      >
      </div>
      <Box
        ref={menuEl}
        as='nav'
        bg='text'
        sx={{
          position: 'absolute',
          transform: 'translateY(-110%)',
          top: 0,
          bottom: 0,
          left: 0
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
