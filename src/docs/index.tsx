import React from 'react'

import { ThemeProvider } from '../components/ThemeProvider'

import Content from './content'
import { RoutesProvider } from './contexts/pages-context'

function Docs() {
  return (
    <ThemeProvider>
      <RoutesProvider>
        <Content />
      </RoutesProvider>
    </ThemeProvider>
  )
}

export default Docs
