import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { UserChart } from '../components/Charts/UserChart'

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
          <UserChart label={'Users'} />
          <UserChart label={'Open rate'} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
