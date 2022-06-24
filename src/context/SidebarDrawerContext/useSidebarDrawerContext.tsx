import { useContext } from 'react'
import { SidebarDrawerContext } from '.'

export const useSidebarDrawerContext = () => {
  const context = useContext(SidebarDrawerContext)

  return context
}
