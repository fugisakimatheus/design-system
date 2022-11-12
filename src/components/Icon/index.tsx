import React from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import theme, { ColorsNames, SpaceNames } from 'theme'

export type MdIconNames = keyof typeof MdIcons
export type FaIconNames = keyof typeof FaIcons
export type FiIconNames = keyof typeof FiIcons

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg'
export type IconsProps<T> = IconBaseProps & {
  name: T
  color?: ColorsNames
  size?: IconSizes
  onClick?: () => void
  marginLeft?: SpaceNames
  marginRight?: SpaceNames
  marginTop?: SpaceNames
  marginBottom?: SpaceNames
  marginX?: SpaceNames
  marginY?: SpaceNames
  paddingLeft?: SpaceNames
  paddingRight?: SpaceNames
  paddingTop?: SpaceNames
  paddingBottom?: SpaceNames
  paddingX?: SpaceNames
  paddingY?: SpaceNames
}

export type MdIconsProps = IconsProps<MdIconNames>
export type FaIconsProps = IconsProps<FaIconNames>
export type FiIconsProps = IconsProps<FiIconNames>

export const iconSizesMap = new Map<IconSizes, string>([
  ['xs', '0.75rem'],
  ['sm', '1rem'],
  ['md', '1.5rem'],
  ['lg', '2rem']
])

export function iconBuilder<T>(
  props: IconsProps<T>,
  reactIcons: {
    [name: string]: IconType
  }
) {
  const Icon = reactIcons[props.name as string]
  const themeColor = theme.colors[props.color ?? 'black']
  const iconSize = iconSizesMap.get(props.size ?? 'md') ?? '1rem'

  return (
    <Icon
      {...props}
      color={themeColor}
      size={iconSize}
      cursor={props.onClick ? 'pointer' : undefined}
    />
  )
}

export const MdIcon = (props: MdIconsProps) => {
  return iconBuilder<MdIconNames>(props, MdIcons)
}

export const FaIcon = (props: FaIconsProps) => {
  return iconBuilder<FaIconNames>(props, FaIcons)
}

export const FiIcon = (props: FiIconsProps) => {
  return iconBuilder<FiIconNames>(props, FiIcons)
}
