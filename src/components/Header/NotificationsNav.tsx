import { Flex, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationsNav() {
  return (
    <Flex marginLeft={'auto'}>
      <HStack
        spacing={'8'}
        marginX={'8'}
        paddingRight={'8'}
        paddingY={'1'}
        color={'gray.300'}
        borderRightWidth={'1px'}
        borderColor={'gray.700'}
      >
        <Icon as={RiNotificationLine} fontSize={'20'} />
        <Icon as={RiUserAddLine} fontSize={'20'} />
      </HStack>
    </Flex>
  )
}
