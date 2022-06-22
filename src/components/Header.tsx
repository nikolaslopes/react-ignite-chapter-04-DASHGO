import { Flex, Text } from '@chakra-ui/react'

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
    </Flex>
  )
}
