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
  useDisclosure,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawerContext } from '../../context/SidebarDrawerContext/useSidebarDrawerContext'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  // const  = useSidebarDrawerContext()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: true,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={true} onClose={() => {}} placement={'left'}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={'gray.800'} padding={'4'}>
          <DrawerCloseButton marginTop={'6'} />
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
      {isDrawerSidebar && <Icon as={RiMenuLine} />}
      <SidebarNav />
    </Box>
  )
}
