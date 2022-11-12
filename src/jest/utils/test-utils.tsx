import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { ThemeProvider } from '../../components/ThemeProvider'

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render, userEvent }
