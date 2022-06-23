import { Box, Button, HStack } from '@chakra-ui/react'

export function Pagination() {
  return (
    <HStack marginTop={'8'} justifyContent={'space-between'}>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <Button
          size={'sm'}
          fontSize={'xs'}
          width={'4'}
          colorScheme={'pink'}
          disabled
          _disabled={{
            cursor: 'default',
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
