import { Box, Flex } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function UserCreate() {
  return (
    <Box>
      <Header />

      <Flex
        width={'100%'}
        marginY={'6'}
        maxWidth={'1480px'}
        marginX={'auto'}
        paddingX={'6'}
      >
        <Sidebar />

        <Box
          flex={'1'}
          borderRadius={'8'}
          backgroundColor={'gray.800'}
          padding={'8'}
        ></Box>
      </Flex>
    </Box>
  )
}
