/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  TabsProps as ChakraTabsProps,
  Tabs as ChakraTabs,
  TabListProps as ChakraTabListProps,
  TabList as ChakraTabList,
  TabProps as ChakraTabProps,
  Tab as ChakraTab,
  TabPanelsProps as ChakraTabPanelsProps,
  TabPanels as ChakraTabPanels,
  TabPanelProps as ChakraTabPanelProps,
  TabPanel as ChakraTabPanel,
  SystemProps
} from '@chakra-ui/react'
import React from 'react'

import { Box } from '../Box'
import { Flex } from '../Flex'

export type TabsProps = ChakraTabsProps
export const Tabs = ChakraTabs

export type TabListProps = ChakraTabListProps
export const TabList = ChakraTabList

export type TabPanelsProps = ChakraTabPanelsProps
export const TabPanels = ChakraTabPanels

export type TabPanelProps = ChakraTabPanelProps
export const TabPanel = ChakraTabPanel

type CustomTabProps = ChakraTabProps & {
  icon?: JSX.Element
  iconPosition?: string
}

const stylesByDirection = new Map([
  ['left', { margin: { marginRight: 1 }, direction: 'row' }],
  ['right', { margin: { marginLeft: 1 }, direction: 'row-reverse' }],
  ['top', { margin: { marginBottom: 0.5 }, direction: 'column' }],
  ['bottom', { margin: { marginBottom: 0.5 }, direction: 'column-reverse' }]
])

export type TabProps = CustomTabProps

export const Tab: React.FC<CustomTabProps> = props => {
  const { icon, children, iconPosition, css, ...rest } = props

  const styles = stylesByDirection.get(iconPosition ?? 'left') || {
    margin: { marginRight: 1 },
    direction: 'row'
  }

  const direction = styles.direction as SystemProps['flexDirection']
  const margin = styles.margin

  return (
    <ChakraTab {...rest}>
      <Flex alignItems="center" direction={direction}>
        {icon && (
          <Box padding="2px" {...margin}>
            {icon}
          </Box>
        )}
        {children}
      </Flex>
    </ChakraTab>
  )
}
