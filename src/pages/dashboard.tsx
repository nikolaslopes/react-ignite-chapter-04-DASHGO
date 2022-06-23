import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Dashboard: NextPage = () => {
  return (
    <Flex direction={'column'} height={'100vh'}>
      <Header />

      <Flex
        width={'100%'}
        maxWidth={'1480px'}
        marginY={'6'}
        marginX={'auto'}
        paddingX={'6'}
      >
        <Sidebar />

        <SimpleGrid flex={'1'} gap={'4'} minChildWidth={'320px'}>
          <Box padding={'8'} backgroundColor={'gray.800'} borderRadius={'8'}>
            <Text fontSize={'lg'} marginBottom={'4'}>
              afs
            </Text>
          </Box>

          <Box padding={'8'} backgroundColor={'gray.800'} borderRadius={'8'}>
            <Text fontSize={'lg'} marginBottom={'4'}>
              afs
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
