import React from 'react'

import { Flex } from '../components/Flex'
import { Text } from '../components/Text'

export type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps) => {
  const { title } = props
  return (
    <Flex
      height="56px"
      width="100%"
      backgroundColor="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      paddingX="1rem"
      paddingY="0.5rem"
      justify="between"
    >
      <Flex align="center">
        <Text color="gray.700" fontWeight="bold">
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Header
