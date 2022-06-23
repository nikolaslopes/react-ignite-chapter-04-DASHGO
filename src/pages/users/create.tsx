import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
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
        >
          <Heading size={'lg'} fontWeight={'normal'}>
            Create User
          </Heading>

          <Divider marginY={'6'} borderColor={'gray.700'} />

          <Stack>
            <Input name="name" label="Full name" />
            <Input name="email" label="E-mail" />
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
