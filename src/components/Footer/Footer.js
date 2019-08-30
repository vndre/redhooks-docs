import React from 'react'
import { Box, Text } from 'rebass'
import { Styled } from 'theme-ui'

const Footer = () => (
  <Box
    as='footer'
    py={3}
    pr={3}
    fontSize={1}
    textAlign='end'
  >
    <Text>
      coded by&ensp;
      <Styled.a href='https://ansky.sh'>Ansky</Styled.a>
    </Text>
  </Box>
)

export default Footer
