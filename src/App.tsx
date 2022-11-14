import React from 'react'

import { ThemeProvider } from './components/ThemeProvider'
import { Paginator, SelectSearch, Box } from './main'

function App() {
  const args = {
    options: [
      {
        value: 'id1',
        label: 'Option 1 very long text example to break context'
      },
      { value: 'id2', label: 'Option 2' },
      { value: 'id3', label: 'Option 3' }
    ],
    isMulti: true,
    defaultValue: 'id2',
    placeholder: 'Selecione uma opção',
    isDisabled: false,
    isInvalid: false,
    onChange: () => null
  }

  return (
    <ThemeProvider>
      <Box p="10">
        <SelectSearch {...args} isSearchable />
        <Box mt="4">
          <Paginator currentPage={7} lastPage={20} onChangePage={() => null} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
