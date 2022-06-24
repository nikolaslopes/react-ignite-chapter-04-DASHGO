import { useDisclosure } from '@chakra-ui/react'
import { createContext } from 'react'
import { SidebarDrawerProviderProps } from './types'

export const SidebarDrawerContext = createContext({})

const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps) => {
  const { isOpen, onClose } = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={{ isOpen, onClose }}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
