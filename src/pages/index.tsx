import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

interface IFormInput {
  email: string
  password: string
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <Flex
      width={'100vw'}
      height={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex
        as={'form'}
        width={'100%'}
        maxWidth={'360px'}
        backgroundColor={'gray.800'}
        padding={'8'}
        borderRadius={'8px'}
        flexDirection={'column'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={'4'}>
          <Input
            idName="email"
            type="email"
            label="E-mail"
            {...register('email')}
          />
          <Input
            idName="password"
            label="Password"
            type="password"
            {...register('password')}
          />
        </Stack>

        <Button type="submit" marginTop={'6'} colorScheme={'pink'} size={'lg'}>
          Sign In
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
