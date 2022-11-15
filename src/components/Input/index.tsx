import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputLeftAddon as ChakraInputLeftAddon,
  InputRightElement as ChakraInputRightElement,
  InputRightAddon as ChakraInputRightAddon,
  forwardRef
} from '@chakra-ui/react'
import React from 'react'

import { MdIcon } from '../Icon'
import { Stack } from '../Stack'

export const BaseInput = ChakraInput
export const InputGroup = ChakraInputGroup
export const InputLeftElement = ChakraInputLeftElement
export const InputLeftAddon = ChakraInputLeftAddon
export const InputRightElement = ChakraInputRightElement
export const InputRightAddon = ChakraInputRightAddon

export type InputProps = ChakraInputProps & {
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  rightElementSlot?: React.ReactNode
  leftElementSlot?: React.ReactNode
}

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const {
    isInvalid,
    leftAddon,
    rightAddon,
    placeholder,
    rightElementSlot,
    leftElementSlot,
    isDisabled,
    disabled,
    ...rest
  } = props

  const testID = rest['data-testid']

  const hasMultipleRightElements =
    [isInvalid, !!rightElementSlot].filter(item => item).length > 1

  const hasMultipleLeftElements =
    [!!leftElementSlot].filter(item => item).length > 1

  return (
    <InputGroup {...rest} data-testid={undefined}>
      {!!leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}

      {leftElementSlot && (
        <InputLeftElement
          width={hasMultipleLeftElements ? 'fit-content' : undefined}
          paddingLeft={hasMultipleLeftElements ? '0.75rem' : undefined}
        >
          <Stack direction="row" alignItems="center" spacing={undefined}>
            {!!leftElementSlot && leftElementSlot}
          </Stack>
        </InputLeftElement>
      )}

      <ChakraInput
        {...rest}
        ref={ref}
        data-testid={testID}
        disabled={isDisabled || disabled}
        cursor={isDisabled || disabled ? 'not-allowed' : undefined}
        placeholder={placeholder}
        isInvalid={isInvalid}
        paddingRight={hasMultipleRightElements ? '4rem' : undefined}
        paddingLeft={hasMultipleLeftElements ? '4rem' : undefined}
      />

      {(rightElementSlot || isInvalid) && (
        <InputRightElement
          width={hasMultipleRightElements ? 'fit-content' : undefined}
          paddingRight={hasMultipleRightElements ? '0.75rem' : undefined}
        >
          <Stack direction="row" alignItems="center" spacing="nano">
            <>
              {isInvalid && <MdIcon name="MdError" color="red.700" size="sm" />}
              {!!rightElementSlot && rightElementSlot}
            </>
          </Stack>
        </InputRightElement>
      )}

      {!!rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
    </InputGroup>
  )
})
