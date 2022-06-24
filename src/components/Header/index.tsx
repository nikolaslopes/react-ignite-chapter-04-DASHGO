import { Flex, Icon, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
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
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex alignItems={'center'} marginLeft={'auto'}>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
