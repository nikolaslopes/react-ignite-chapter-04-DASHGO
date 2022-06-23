import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { Logo } from './Header/Logo'
import { NotificationsNav } from './Header/NotificationsNav'
import { Profile } from './Header/Profile'
import { SearchBox } from './Header/SearchBox'

export function Header() {
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

      <SearchBox />

      <NotificationsNav />

      <Profile />
    </Flex>
  )
}
