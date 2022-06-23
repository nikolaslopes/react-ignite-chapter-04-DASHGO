import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

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

      <Flex alignItems={'center'} marginLeft={'auto'}>
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}
