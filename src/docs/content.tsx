import React from 'react'

import { Box, Flex } from '../main'

import { useRoute } from './contexts/pages-context'
import Drawer from './drawer'
import Header from './header'

function Content() {
  const { currentPage } = useRoute()

  return (
    <Flex height="100vh" width="100%" backgroundColor="white">
      <Drawer />
      <Box height="100%" width="calc(100% - 300px)" position="relative">
        <Header
          title={
            currentPage.group
              ? `${currentPage.group} / ${currentPage.name}`
              : currentPage.name
          }
        />
        <Box
          height="calc(100% - 56px)"
          width="100%"
          overflowY="auto"
          backgroundColor="gray.50"
          padding="1rem"
        >
          {currentPage.component}
        </Box>
      </Box>
    </Flex>
  )
}

export default Content
