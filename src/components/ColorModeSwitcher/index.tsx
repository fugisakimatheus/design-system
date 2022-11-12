import React from 'react'

import { useColorMode, useColorModeValue } from '../../hooks'
import { FaIcon } from '../Icon'
import { IconButton, IconButtonProps } from '../IconButton'

export type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const iconName = useColorModeValue('FaMoon', 'FaSun')

  return (
    <IconButton
      size="md"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<FaIcon name={iconName} size="md" />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
