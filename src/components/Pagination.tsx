import { Button, HStack } from '@chakra-ui/react'

export function Pagination() {
  return (
    <HStack
      spacing={'6'}
      marginTop={'8'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <HStack>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={'4'}
          backgroundColor={'gray.700'}
          _hover={{
            backgroundColor: 'gray.500',
          }}
        >
          1
        </Button>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={'4'}
          backgroundColor={'gray.700'}
          _hover={{
            backgroundColor: 'gray.500',
          }}
        >
          2
        </Button>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={'4'}
          backgroundColor={'gray.700'}
          _hover={{
            backgroundColor: 'gray.500',
          }}
        >
          3
        </Button>
      </HStack>
    </HStack>
  )
}
