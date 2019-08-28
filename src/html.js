import React from 'react'
import PropTypes from 'prop-types'

const FONTS = [
  'https://cdn.jsdelivr.net/gh/anskydev/mercury/fonts/CodeSansR.woff2',
  'https://cdn.jsdelivr.net/gh/anskydev/mercury/fonts/CodeSansR.woff',
  'https://cdn.jsdelivr.net/gh/anskydev/mercury/fonts/CodeSansB.woff2',
  'https://cdn.jsdelivr.net/gh/anskydev/mercury/fonts/CodeSansB.woff'
]

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index,follow" />
        {
          FONTS.map((font) => <link key={font} rel="preload" href={font} as="font" />)
        }
        <style dangerouslySetInnerHTML={{
          __html: `@font-face {
              font-family: "code sans";
              src: url(${FONTS[0]}) format("woff2"),
                url(${FONTS[1]}) format("woff");
              font-weight: 300;
              font-display: swap;
            }

            @font-face {
              font-family: "code sans";
              src: url(${FONTS[2]}) format("woff2"),
                url(${FONTS[3]}) format("woff");
              font-weight: 700;
              font-display: swap;
            }`
        }} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="booty"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
