import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
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

          <Stack spacing={'8'}>
            <SimpleGrid minChildWidth={'240px'} spacing={'8'}>
              <Input name="name" label="Full name" />
              <Input name="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing={'8'}>
              <Input name="password" label="Password" />
              <Input name="password_confirmation" label="Confirm passowrd" />
            </SimpleGrid>
          </Stack>

          <Flex marginTop={'8'} justifyContent={'flex-end'}>
            <HStack spacing={'4'}>
              <Button width="20" colorScheme={'whiteAlpha'}>
                Cancel
              </Button>
              <Button width="20" colorScheme={'pink'}>
                Confirm
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
