import React from 'react'
import { Global as EmotionGlobal } from '@emotion/core'

const Global = () => (
  <EmotionGlobal
    styles={(theme) => ({
      body: {
        color: theme.colors.text,
        margin: 0,
        backgroundColor: theme.colors.background
      },
      '*': {
        boxSizing: 'border-box'
      }
    })}
  />
)

export default Global
