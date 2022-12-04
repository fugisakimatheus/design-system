import React, { useEffect, useState } from 'react'

import { Text, MdIcon, Flex, Box } from '../main'

import {
  ComponentPage,
  groupedComponentsPages,
  ungroupedComponentsPages
} from './components'
import { useRoute } from './contexts/pages-context'

const Drawer = () => {
  const { currentPage, setCurrentPage } = useRoute()
  const [expandedGroups, setExpandedGroups] = useState({})

  const componentsGroups = Object.keys(groupedComponentsPages).map(key => ({
    name: key,
    pages: groupedComponentsPages[key] as ComponentPage[]
  }))

  useEffect(() => {
    const expanded = {}
    componentsGroups.forEach(group => {
      expanded[group.name] = true
    })

    setExpandedGroups(expanded)
  }, [])

  const handleToggleGroup = (key: string) => {
    setExpandedGroups(old => ({ ...old, [key]: !old[key] }))
  }

  return (
    <Flex
      height="100%"
      width="300px"
      backgroundColor="gray.50"
      direction="column"
      align="left"
      overflowY="auto"
      borderRight="1px solid"
      borderColor="gray.100"
    >
      <Text
        paddingY="0.5rem"
        paddingX="1rem"
        fontSize="larger"
        fontWeight="bold"
        color="blue.600"
      >
        Fugisaki - Design System
      </Text>

      {ungroupedComponentsPages.map(page => {
        const isActiveRoute = page.name === currentPage.name
        return (
          <Flex
            key={page.name}
            width="100%"
            paddingY="0.5rem"
            paddingX="1rem"
            cursor="pointer"
            align="center"
            fontWeight={isActiveRoute ? 'bold' : 'semibold'}
            _hover={{
              backgroundColor: 'blue.50',
              color: 'blue.600',
              fontWeight: 'bold'
            }}
            color={isActiveRoute ? 'blue.600' : 'gray.700'}
            backgroundColor={isActiveRoute ? 'blue.50' : 'gray.50'}
            userSelect="none"
            onClick={() => setCurrentPage(page.name)}
          >
            <MdIcon name="MdBorderInner" size="sm" marginRight="2" />
            <Text fontSize="sm">{page.name}</Text>
          </Flex>
        )
      })}

      {componentsGroups.map(group => {
        return (
          <Box key={group.name} width="100%" userSelect="none">
            <Flex
              align="center"
              cursor="pointer"
              justify="space-between"
              width="100%"
              paddingY="0.5rem"
              paddingX="1rem"
              _hover={{
                backgroundColor: 'gray.50'
              }}
              onClick={() => handleToggleGroup(group.name)}
            >
              <Text
                fontSize="12px"
                textTransform="uppercase"
                fontWeight="bold"
                color="blue.600"
                letterSpacing="wider"
              >
                {group.name}
              </Text>

              <MdIcon
                name={
                  expandedGroups[group.name]
                    ? 'MdKeyboardArrowUp'
                    : 'MdKeyboardArrowDown'
                }
                size="sm"
                marginRight="2"
                color="blue.600"
              />
            </Flex>

            {!expandedGroups[group.name]
              ? null
              : group.pages.map(page => {
                  const isActiveRoute = page.name === currentPage.name
                  return (
                    <Flex
                      key={page.name}
                      width="100%"
                      paddingY="0.5rem"
                      paddingX="1rem"
                      cursor="pointer"
                      align="center"
                      fontWeight={isActiveRoute ? 'bold' : 'semibold'}
                      _hover={{
                        backgroundColor: 'blue.50',
                        color: 'blue.600',
                        fontWeight: 'bold'
                      }}
                      color={isActiveRoute ? 'blue.600' : 'gray.700'}
                      backgroundColor={isActiveRoute ? 'blue.50' : 'gray.50'}
                      userSelect="none"
                      onClick={() => setCurrentPage(page.name)}
                    >
                      <MdIcon name="MdBorderInner" size="sm" marginRight="2" />
                      <Text fontSize="sm">{page.name}</Text>
                    </Flex>
                  )
                })}
          </Box>
        )
      })}
    </Flex>
  )
}

export default Drawer
