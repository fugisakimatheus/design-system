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
export { Box, BoxProps } from './components/Box'
export { Flex, FlexProps } from './components/Flex'
export { Button, ButtonProps } from './components/Button'
export { Center, CenterProps } from './components/Center'
export { Container, ContainerProps } from './components/Container'
export { Divider, DividerProps } from './components/Divider'
export { Grid, GridProps, GridItem, GridItemProps } from './components/Grid'
export { Heading, HeadingProps } from './components/Heading'
export { Text, TextProps } from './components/Text'
export { Paginator, PaginatorProps } from './components/Paginator'
export { SelectSearch, SelectSearchProps } from './components/SelectSearch'
export { Stack, StackProps, HStack } from './components/Stack'
export { Image, ImageProps } from './components/Image'
export { Code, CodeProps } from './components/Code'
export { Kbd, KbdProps } from './components/Kbd'
export { Spinner, SpinnerProps } from './components/Spinner'
export {
  Skeleton,
  SkeletonProps,
  SkeletonText,
  SkeletonTextProps,
  SkeletonCircle
} from './components/Skeleton'
export {
  Collapse,
  CollapseProps,
  Fade,
  FadeProps,
  ScaleFade,
  ScaleFadeProps,
  Slide,
  SlideProps,
  SlideFade,
  SlideFadeProps
} from './components/Transitions'
export {
  Editable,
  EditableProps,
  EditableInput,
  EditableInputProps,
  EditablePreview,
  EditablePreviewProps,
  EditableTextarea,
  EditableTextareaProps
} from './components/Editable'
