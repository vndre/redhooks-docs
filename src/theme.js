import { rem } from 'polished'

const heading = {
  fontFamily: 'body',
  fontWeight: 'heading',
  lineHeight: 'heading',
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

export default {
  breakpoints: ['35em', '48em', '69em', '113em'],
  colors: {
    text: '#080808',
    background: '#fff6f6',
    primary: '#fb3030',
    secondary: '#fb6b6b',
    muted: '#e2e2e2',
    blue: '#4360ff'
  },
  fonts: {
    body: 'code sans, monospace',
    heading: 'code sans, monospace',
    monospace: 'code sans, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: '300',
    heading: '700'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  lineHeights: {
    body: 1.5,
    heading: 1.75
  },
  shadows: {
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    small: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  textStyles: {
    heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6, 7],
      mt: 3
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      height: '100vh',

      '> *': {
        maxWidth: rem('1500px'),
        margin: 'auto !important'
      }
    },
    h1: {
      fontSize: 5,
      variant: 'textStyles.heading',
      mt: 0,
      mb: 3
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 3,
      mt: 4,
      mb: 3
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 0
    },
    p: {
      textAlign: 'justify'
    },
    a: {
      color: 'primary',
      display: 'inline-block',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 300ms ease-in-out',
      '&:hover': {
        color: 'secondary'
      }
    },
    blockquote: {
      fontStyle: 'italic',
      position: 'relative',
      my: 2,
      mx: 4,

      '&::after': {
        content: '""',
        position: 'absolute',
        left: rem('-16px'),
        top: 0,
        bottom: 0,
        width: rem('5px'),
        bg: 'blue'
      }
    },
    buttons: {
      primary: {
        color: 'text',
        bg: 'primary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      overflow: 'auto',
      color: 'background',
      backgroundColor: 'text',
      '.prolog, .constant, .builtin': {
        color: '#99cc99'
      },
      '.inserted, .function': {
        color: '#dad085'
      },
      '.deleted': {
        color: '#f92672'
      },
      '.changed': {
        color: 'blue'
      },
      '.punctuation, .symbol, .operator': {
        color: '#bb6c6c'
      },
      '.string, .char, .tag, .selector': {
        color: '#ffb9b9',
        opacity: '0.5'
      },
      '.property-access': {
        color: '#b29def'
      },
      '.keyword, .variable': {
        color: '#ff4b4b',
        fontStyle: 'italic'
      },
      '.plain': {
        color: 'background'
      },
      '.comment': {
        color: '#7c7c7c'
      },
      '.class-name': {
        color: '#bdb37b'
      }
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'background',
      bg: 'text',
      px: 1
    }
  }
}
