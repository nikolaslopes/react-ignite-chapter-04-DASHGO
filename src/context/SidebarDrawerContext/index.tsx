import { useDisclosure } from '@chakra-ui/react'
import { createContext } from 'react'
import { SidebarDrawerContextData, SidebarDrawerProviderProps } from './types'

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData
)

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
