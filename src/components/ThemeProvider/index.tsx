import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import theme from '../../theme'
import Fonts from '../../theme/fonts'

export type IThemeProvider = React.FC<{ children: React.ReactNode }>

export const ThemeProvider: IThemeProvider = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Fonts />
    {children}
  </ChakraProvider>
)
