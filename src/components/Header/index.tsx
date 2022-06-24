import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawerContext } from '../../context/SidebarDrawerContext/useSidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawerContext()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      width="100%"
      maxWidth={'1480px'}
      height={'20'}
      marginX={'auto'}
      marginTop={'4'}
      paddingX={'6'}
      alignItems={'center'}
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Sidebar"
          icon={<Icon as={RiMenuLine} />}
          fontSize={'24'}
          variant={'unstyled'}
          marginRight={'2'}
          onClick={onOpen}
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex alignItems={'center'} marginLeft={'auto'}>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
