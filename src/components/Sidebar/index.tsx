import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawerContext } from '../../context/SidebarDrawerContext/useSidebarDrawerContext'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawerContext()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={'gray.800'} padding={'4'}>
          <DrawerCloseButton marginTop={'6'} onClick={onClose} />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Box as={'aside'} width={'64'} marginRight={'8'}>
      <SidebarNav />
    </Box>
  )
}
