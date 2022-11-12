import {
  SelectProps,
  chakra,
  forwardRef,
  ThemeTypings,
  ResponsiveValue
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import type { RefAttributes } from 'react'
import React from 'react'
import type { GroupBase, Props, SelectInstance } from 'react-select'

import { ColorsNames } from '../../theme'

export type Token<
  CSSType,
  ThemeKey = unknown
> = ThemeKey extends keyof ThemeTypings
  ? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]>
  : ResponsiveValue<CSSType>

type Option = unknown
type IsMulti = boolean
type Group = GroupBase<Option>

export type SelectOption<T = string> = {
  value: T
  label: string
}

const ChakraSelect = chakra(Select)

export type SelectSearchProps = SelectProps &
  Props<Option, IsMulti, Group> &
  RefAttributes<SelectInstance<Option, IsMulti, Group>> & {
    multiValueBackground: Token<ColorsNames, 'colors'>
  }

export const SelectSearch = forwardRef<SelectSearchProps, 'input'>(
  (props: SelectSearchProps, ref) => {
    return <ChakraSelect ref={ref} {...props} />
  }
)
