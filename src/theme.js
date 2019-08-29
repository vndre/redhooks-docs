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
  colors: {
    text: '#080808',
    background: '#fff6f6',
    primary: '#fb3030',
    secondary: '#fb6b6b',
    muted: '#e2e2e2'
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
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      fontSize: 5,
      variant: 'textStyles.heading',
      mt: 0,
      mb: 4
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 3
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
    a: {
      color: 'primary',
      display: 'inline-block',
      fontWeight: 'bold',
      px: 2,
      py: 1,
      textDecoration: 'none',
      '&:hover': {
        color: 'secondary'
      }
    },
    buttons: {
      primary: {
        color: 'text',
        bg: 'primary'
      }
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    }
  },
  prism: {
    [[
      '.comment',
      '.prolog',
      '.doctype',
      '.cdata',
      '.punctuation',
      '.operator',
      '.entity',
      '.url'
    ]]: {
      color: 'muted'
    },
    '.comment': {
      fontStyle: 'italic'
    },
    [[
      '.property',
      '.tag',
      '.boolean',
      '.number',
      '.constant',
      '.symbol',
      '.deleted',
      '.function',
      '.class-name',
      '.regex',
      '.important',
      '.variable'
    ]]: {
      color: 'primary'
    },
    [['.atrule', '.attr-value', '.keyword']]: {
      color: 'primary'
    },
    [[
      '.selector',
      '.attr-name',
      '.string',
      '.char',
      '.builtin',
      '.inserted'
    ]]: {
      color: 'secondary'
    }
  }
}
