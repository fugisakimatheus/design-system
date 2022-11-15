import React from 'react'
import ReactDOM from 'react-dom/client'

import Docs from './docs'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>
)
