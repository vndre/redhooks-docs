import React from 'react'
import {
  Flex, Heading, Text, Box
} from 'rebass'
import { rem } from 'polished'
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-down.svg'

const Hero = () => (
    <Flex
      as='section'
      p={[4, 5, 6]}
      height='100vh'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      maxWidth={rem('1500px')}
    >
      <Heading
        fontSize={[5, 6]}
        color='primary'
      >
        Red
        <Text
          color='text'
          display='inline'
        >
          hooks
        </Text>
      </Heading>
      <Text
        fontSize={[2, 3]}
        color='text'
        textAlign='center'
        css={{
          userSelect: 'none',
          maxWidth: rem('800px')
        }}
      >
        Redhooks is a tiny React utility library for holding a predictable
        state container in your React apps. Inspired by Redux, it
        reimplements the redux paradigm of state-management by using
        React&apos;s new Hooks and Context API, which have been officially
        released by the React team.
      </Text>
      <Box
        css={{
          position: 'absolute',
          bottom: rem('20px'),
          cursor: 'pointer',

          '&:hover': {
            svg: {
              transform: `translateY(${rem('5px')})`
            }
          }
        }}
        fontSize={1}
      >
        <Text fontWeight='bold'>documentation</Text>
        <ArrowIcon
          css={{
            width: rem('30px'),
            height: rem('30px'),
            display: 'block',
            margin: 'auto',
            transitionProperty: 'transform',
            transitionDuration: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.42, 0.0, 1.0, 1.0)'
          }}
        />
      </Box>
    </Flex>
)

export default Hero
