import { extendTheme, Theme, theme as baseTheme } from '@chakra-ui/react'

import { Leaves } from '../utils/types'

// Custom config for theme
export const customTheme: Theme = {
  direction: 'ltr',
  config: {
    ...baseTheme.config,
    initialColorMode: 'light',
    useSystemColorMode: true
  },
  styles: {
    ...baseTheme.styles
  },
  colors: {
    ...baseTheme.colors
  },
  semanticTokens: {
    ...baseTheme.semanticTokens
  },
  shadows: {
    ...baseTheme.shadows
  },
  radii: {
    ...baseTheme.radii
  },
  sizes: {
    ...baseTheme.sizes
  },
  space: {
    ...baseTheme.space
  },
  transition: {
    ...baseTheme.transition
  },
  blur: {
    ...baseTheme.blur
  },
  borders: {
    ...baseTheme.borders
  },
  breakpoints: {
    ...baseTheme.breakpoints
  },
  fonts: {
    ...baseTheme.fonts,
    heading: `'Roboto', sans-serif !important`,
    body: `'Roboto', sans-serif !important`
  },
  fontSizes: {
    ...baseTheme.fontSizes
  },
  fontWeights: {
    ...baseTheme.fontWeights
  },
  lineHeights: {
    ...baseTheme.lineHeights
  },
  letterSpacings: {
    ...baseTheme.letterSpacings
  },
  zIndices: {
    ...baseTheme.zIndices
  },
  components: {
    ...baseTheme.components
  }
}

// Theme types
export type ColorsNames = Leaves<typeof customTheme['colors']>
export type ShadowsNames = Leaves<typeof customTheme['shadows']>
export type RadiiNames = Leaves<typeof customTheme['radii']>
export type SizesNames = Leaves<typeof customTheme['sizes']>
export type SpaceNames = Leaves<typeof customTheme['space']>
export type TransitionNames = Leaves<typeof customTheme['transition']>
export type BlurNames = Leaves<typeof customTheme['blur']>
export type BordersNames = Leaves<typeof customTheme['borders']>
export type BreakpointsNames = Leaves<typeof customTheme['breakpoints']>
export type FontSizesNames = Leaves<typeof customTheme['fontSizes']>
export type FontWeightsNames = Leaves<typeof customTheme['fontWeights']>
export type LineHeightsNames = Leaves<typeof customTheme['lineHeights']>
export type LetterSpacingsNames = Leaves<typeof customTheme['letterSpacings']>
export type ZIndicesNames = Leaves<typeof customTheme['zIndices']>

// Theme override
const theme = extendTheme(customTheme)

export default theme
