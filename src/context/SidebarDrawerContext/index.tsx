import { useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, useEffect } from 'react'
import { SidebarDrawerContextData, SidebarDrawerProviderProps } from './types'

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData
)

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {}, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
