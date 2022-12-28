import { Global } from '@emotion/react'
import React from 'react'

import RobotoBoldTTF from '../assets/fonts/roboto-bold/roboto-bold.ttf'
import RobotoBoldWOFF from '../assets/fonts/roboto-bold/roboto-bold.woff'
import RobotoBoldWOFF2 from '../assets/fonts/roboto-bold/roboto-bold.woff2'
import RobotoMediumTTF from '../assets/fonts/roboto-medium/roboto-medium.ttf'
import RobotoMediumWOFF from '../assets/fonts/roboto-medium/roboto-medium.woff'
import RobotoMediumWOFF2 from '../assets/fonts/roboto-medium/roboto-medium.woff2'
import RobotoRegularTTF from '../assets/fonts/roboto-regular/roboto-regular.ttf'
import RobotoRegularWOFF from '../assets/fonts/roboto-regular/roboto-regular.woff'
import RobotoRegularWOFF2 from '../assets/fonts/roboto-regular/roboto-regular.woff2'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'roboto';
        src: url(${RobotoBoldWOFF2}?#iefix') format('woff2'),
             url(${RobotoBoldWOFF}) format('woff'),
             url(${RobotoBoldTTF}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'roboto';
        src: url(${RobotoMediumWOFF2}?#iefix') format('woff2'),
             url(${RobotoMediumWOFF}) format('woff'),
             url(${RobotoMediumTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'roboto';
        src: url(${RobotoRegularWOFF2}?#iefix') format('woff2'),
             url(${RobotoRegularWOFF}) format('woff'),
             url(${RobotoRegularTTF}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
  />
)

export default Fonts
