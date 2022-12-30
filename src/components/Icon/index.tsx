import React from 'react'
import { IconType } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import { ColorsNames, SpaceNames } from 'theme'

import { Flex } from '../Flex'

export type MdIconNames = keyof typeof MdIcons
export type FaIconNames = keyof typeof FaIcons
export type FiIconNames = keyof typeof FiIcons
export type SiIconNames = keyof typeof SiIcons

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg'
export type IconsProps<T> = {
  name: T
  color?: ColorsNames
  size?: IconSizes
  backgroundColor?: ColorsNames
  marginTop?: SpaceNames
  marginLeft?: SpaceNames
  marginRight?: SpaceNames
  marginBottom?: SpaceNames
  marginX?: SpaceNames
  marginY?: SpaceNames
  paddingTop?: SpaceNames
  paddingLeft?: SpaceNames
  paddingRight?: SpaceNames
  paddingBottom?: SpaceNames
  paddingX?: SpaceNames
  paddingY?: SpaceNames
  onClick?: () => void
}

export type MdIconsProps = IconsProps<MdIconNames>
export type FaIconsProps = IconsProps<FaIconNames>
export type FiIconsProps = IconsProps<FiIconNames>
export type SiIconsProps = IconsProps<SiIconNames>

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
  const { name, color, size, onClick, ...rest } = props
  const Icon = reactIcons[name as string]
  const iconSize = iconSizesMap.get(size ?? 'md') ?? '1rem'

  return (
    <Flex align="center" justify="center" color={color} {...rest}>
      <Icon
        size={iconSize}
        onClick={onClick}
        cursor={onClick ? 'pointer' : undefined}
      />
    </Flex>
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

export const SiIcon = (props: SiIconsProps) => {
  return iconBuilder<SiIconNames>(props, FiIcons)
}
