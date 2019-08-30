import React from 'react'
import { keyframes } from '@emotion/core'
import { Box, Image, Flex } from 'rebass'
import { rem } from 'polished'

import LogoOuter from '../../assets/svg/redhooks-logo-ex-03.svg'
import LogoInner from '../../assets/svg/redhooks-logo-ex-02.svg'
import LogoCenter from '../../assets/svg/redhooks-logo-ex-01.svg'

const rotateZ = keyframes`
  50%, 100% { transform: rotateZ(360deg) }
`

const rotateZR = keyframes`
  4\0%, 100% { transform: rotateZ(-360deg) }
`

const rotateX = keyframes`
  65%, 100% { transform: rotateX(360deg) }
`

const rotateY = keyframes`
  55%, 100% { transform: rotateY(360deg) }
`

const Logo = () => (
  <Flex
    size={[rem('75px'), rem('115px')]}
    justifyContent='center'
    alignItems='center'
    sx={{
      position: 'relative',

      div: {
        position: 'absolute',
        margin: 'auto',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      },

      '> img': {
        size: '20%'
      }
    }}
  >
    <Box
      css={{
        animation: `${rotateZ} 5s linear infinite`,

        '> img': {
          animation: `${rotateX} 5s linear infinite`
        }
      }}
    >
      <Image src={LogoOuter} />
      <Flex
        justifyContent='center'
        alignItems='center'
        sx={{
          animation: `${rotateZR} 5.5s linear infinite`,

          img: {
            size: '60%',
            animation: `${rotateY} 5s linear infinite`
          }
        }}
      >
        <Image src={LogoInner} />
      </Flex>
    </Box>
    <Image src={LogoCenter} />
  </Flex>
)

export default Logo
