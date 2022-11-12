import { rgba } from './utils/colors'

// Utils
export const utils = {
  rgba
}

// Types
export type { ResponsiveValue } from '@chakra-ui/react'

// Hooks
export {
  useColorMode,
  useColorModeValue,
  useBreakpoint,
  useBreakpointValue,
  useMediaQuery,
  useOutsideClick,
  useClipboard,
  useDisclosure,
  useBoolean,
  useToken,
  useNumberInput,
  useEditableControls
} from './hooks'

// Theme
export { customTheme as theme } from './theme'
export { ThemeProvider, IThemeProvider } from './components/ThemeProvider'
export type {
  BlurNames,
  BordersNames,
  BreakpointsNames,
  ColorsNames,
  FontSizesNames,
  FontWeightsNames,
  LetterSpacingsNames,
  LineHeightsNames,
  RadiiNames,
  ShadowsNames,
  SizesNames,
  SpaceNames,
  TransitionNames,
  ZIndicesNames
} from './theme'

// Components
export {
  ColorModeSwitcher,
  ColorModeSwitcherProps
} from './components/ColorModeSwitcher'
export {
  FaIcon,
  MdIcon,
  FiIcon,
  MdIconsProps,
  FaIconsProps,
  FiIconsProps
} from './components/Icon'
export { IconButton, IconButtonProps } from './components/IconButton'
