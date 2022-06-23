import { Flex, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  return (
    <Flex
      as={'label'}
      flex={'1'}
      paddingY={'4'}
      paddingX={'8'}
      marginLeft={'6'}
      maxWidth={'400'}
      alignSelf={'center'}
      position={'relative'}
      backgroundColor={'gray.800'}
      color={'gray.200'}
      borderRadius={'full'}
      cursor={'pointer'}
    >
      <Input
        placeholder="Search user"
        _placeholder={{ color: 'gray.400' }}
        color={'gray.50'}
        variant={'unstyled'}
      />
      <Icon as={RiSearchLine} fontSize={'20'} />
    </Flex>
  )
}
