import { Global } from '@emotion/react'
import React from 'react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'roboto';
        src: url('./fonts/roboto-bold/roboto-bold.woff2?#iefix') format('woff2'),
             url('./fonts/roboto-bold/roboto-bold.woff') format('woff'),
             url('./fonts/roboto-bold/roboto-bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'roboto';
        src: url('./fonts/roboto-medium/roboto-medium.woff2?#iefix') format('woff2'),
             url('./fonts/roboto-medium/roboto-medium.woff') format('woff'),
             url('./fonts/roboto-medium/roboto-medium.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'roboto';
        src: url('./fonts/roboto-regular/roboto-regular.woff2?#iefix') format('woff2'),
             url('./fonts/roboto-regular/roboto-regular.woff') format('woff'),
             url('./fonts/roboto-regular/roboto-regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
  />
)

export default Fonts
