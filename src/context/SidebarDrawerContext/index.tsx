import { createContext, useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SidebarDrawerContextData, SidebarDrawerProviderProps } from './types'

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData
)

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()
  const { asPath } = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
