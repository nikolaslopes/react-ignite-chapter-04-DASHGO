import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

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
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        letterSpacing={'tight'}
        width={'64'}
      >
        DashGo
        <Text as={'span'} color={'pink.500'} marginLeft={'1'}>
          .
        </Text>
      </Text>

      <Flex
        as={'label'}
        flex={'1'}
        paddingY={'4'}
        paddingX={'8'}
        marginLeft={'6'}
        maxWidth={'400'}
        backgroundColor={'gray.800'}
        alignItems={'center'}
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

        <Flex alignItems={'center'}>
          <Box marginRight={'4'} textAlign={'right'}>
            <Text>Nikolas Lopes</Text>
            <Text color={'gray.300'} fontSize={'small'}>
              nikolaslopes.dev@gmail.com
            </Text>
          </Box>
          <Avatar
            name={'Nikolas Lopes'}
            size={'md'}
            src={'https://github.com/nikolaslopes.png'}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
