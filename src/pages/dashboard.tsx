import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Dashboard: NextPage = () => {
  return (
    <Flex direction={'column'} height={'100vh'} border={'1px solid blue'}>
      <Header />

      <Flex
        width={'100%'}
        maxWidth={'1480px'}
        marginY={'6'}
        marginX={'auto'}
        paddingX={'6'}
      >
        <Sidebar />
      </Flex>
    </Flex>
  )
}

export default Dashboard
