import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'

import { ComponentPage, componentsPages } from '../components'

export type RoutesContextType = {
  currentPage: ComponentPage
  setCurrentPage: (page: ComponentPage) => void
}

export const RoutesContext = createContext<RoutesContextType>(
  {} as RoutesContextType
)

export const RoutesProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<ComponentPage>(componentsPages[0])

  const setCurrentPage = useCallback((page: ComponentPage) => {
    setPage(page || componentsPages[0])
  }, [])

  return (
    <RoutesContext.Provider value={{ currentPage: page, setCurrentPage }}>
      {children}
    </RoutesContext.Provider>
  )
}

export const useRoute = (): RoutesContextType => {
  return useContext(RoutesContext)
}
