import { SelectProps, chakra, forwardRef } from '@chakra-ui/react'
import { ChakraStylesConfig, Select } from 'chakra-react-select'
import type { RefAttributes } from 'react'
import React from 'react'
import type { GroupBase, Props, SelectInstance } from 'react-select'

import { ColorsNames } from '../../theme'

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
    color?: ColorsNames
    multiValueBackground?: ColorsNames
  }

export const SelectSearch = forwardRef<SelectSearchProps, 'input'>(
  (props: SelectSearchProps, ref) => {
    const {
      color = 'blue.700',
      multiValueBackground = 'blue.700',
      ...selectProps
    } = props

    const SelectSearchTheme: ChakraStylesConfig = {
      indicatorSeparator: provited => ({
        ...provited,
        display: 'none'
      }),
      control: (provited, { hasValue }) => ({
        ...provited,
        cursor: 'pointer',
        borderColor: hasValue ? 'gray.800' : 'gray.700',
        borderRadius: '4px',
        _focus: {
          border: '2px solid',
          borderColor: color
        },
        _hover: {
          borderColor: 'gray.800'
        }
      }),
      placeholder: provited => ({
        ...provited,
        color: 'gray.800'
      }),
      dropdownIndicator: (provided, { selectProps }) => ({
        ...provided,
        background: 'transparent',
        paddingRight: 'xxxs',
        borderLeft: 'transparent',
        '> svg': {
          transform: `rotate(${selectProps.menuIsOpen ? -180 : 0}deg)`
        },
        hr: {
          display: 'none'
        }
      }),
      option: provided => ({
        ...provided,
        fontSize: 'sm'
      }),
      menu: provided => ({
        ...provided,
        mt: '4px'
      }),
      menuList: provided => ({
        ...provided,
        border: '2px solid',
        borderColor: color,
        borderRadius: '4px',
        p: 1.5
      }),
      multiValue: provided => ({
        ...provided,
        background: multiValueBackground || 'gray.700'
      }),
      multiValueLabel: provided => ({
        ...provided,
        color: 'white'
      }),
      multiValueRemove: provided => ({
        ...provided,
        opacity: 'unset',
        color: 'white'
      })
    }

    return (
      <ChakraSelect
        {...selectProps}
        ref={ref}
        chakraStyles={SelectSearchTheme}
      />
    )
  }
)
