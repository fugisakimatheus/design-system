import { Image } from 'components/Image'
import React from 'react'

import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Image
        src="https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg?w=2000"
        loadingIndicator="skeleton"
        width="200px"
        height="200px"
      />
    </ThemeProvider>
  )
}

export default App
