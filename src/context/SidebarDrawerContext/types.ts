import { UseDisclosureReturn } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type SidebarDrawerContextData = UseDisclosureReturn
export interface SidebarDrawerProviderProps {
  children: ReactNode
}
