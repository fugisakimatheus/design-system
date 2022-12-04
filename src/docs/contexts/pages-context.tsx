import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'

import {
  ComponentPage,
  componentsPages,
  componentsPagesMap
} from '../components'

export type RoutesContextType = {
  currentPage: ComponentPage
  setCurrentPage: (page: string) => void
}

export const RoutesContext = createContext<RoutesContextType>(
  {} as RoutesContextType
)

export const RoutesProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<string>('Introdução')

  const setCurrentPage = useCallback((page: string) => {
    setPage(page || 'Introdução')
  }, [])

  const selectedPage = componentsPagesMap.get(page) || componentsPages[0]

  return (
    <RoutesContext.Provider
      value={{ currentPage: selectedPage, setCurrentPage }}
    >
      {children}
    </RoutesContext.Provider>
  )
}

export const useRoute = (): RoutesContextType => {
  return useContext(RoutesContext)
}
