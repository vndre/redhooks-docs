import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Flex, Heading, Text, Box, Link
} from 'rebass'
import { rem } from 'polished'
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-down.svg'
import { ReactComponent as RepoIcon } from '../../assets/svg/repository.svg'

const Hero = (props) => {
  const { site } = useStaticQuery(graphql`
    query repoURL {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `)

  return (
    <Flex
      as='section'
      p={[4, 5]}
      height='100vh'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      maxWidth={rem('1500px')}
      css={{
        position: 'relative'
      }}
      {...props}
    >
      <Box
        css={{
          position: 'absolute',
          top: rem('10px'),
          right: rem('10px')
        }}
      >
        <Link
          href={site.siteMetadata.repository}
          color='secondary'
          alt='repository'
        >
          <RepoIcon
            css={{
              width: rem('32px'),
              height: rem('32px')
            }}
          />
        </Link>
      </Box>
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
          userSelect: 'none',

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
}

export default Hero
