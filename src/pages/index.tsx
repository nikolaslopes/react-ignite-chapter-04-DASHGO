import {
  Button,
  Flex,
  Input,
  Stack,
  FormLabel,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Flex
        width={'100vw'}
        height={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
        border={'1px solid red'}
      >
        <Flex
          as={'form'}
          width={'100%'}
          maxWidth={'360px'}
          backgroundColor={'gray.800'}
          padding={'8'}
          borderRadius={'8px'}
          flexDirection={'column'}
        >
          <Stack spacing={'4'}>
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant={'filled'}
                focusBorderColor={'pink.500'}
                backgroundColor={'gray.900'}
                _hover={{
                  backgroundColor: 'gray.900',
                }}
                size="lg"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant={'filled'}
                focusBorderColor={'pink.500'}
                backgroundColor={'gray.900'}
                _hover={{
                  backgroundColor: 'gray.900',
                }}
                size="lg"
              />
            </FormControl>
          </Stack>

          <Button
            type="submit"
            marginTop={'6'}
            colorScheme={'pink'}
            size={'lg'}
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
