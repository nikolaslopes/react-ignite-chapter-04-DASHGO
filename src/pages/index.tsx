import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>()

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      await new Promise((resolse) => setTimeout(resolse, 2000)).then(() =>
        console.log(data)
      )
    } catch {
      alert('error')
    }
  }

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
            type="email"
            idName="email"
            label="E-mail"
            {...register('email', { required: true })}
          />

          <Input
            type="password"
            idName="password"
            label="Password"
            error={errors.password}
            {...register('password', { required: 'Is required' })}
          />
        </Stack>

        <Button
          marginTop={'6'}
          colorScheme={'pink'}
          size={'lg'}
          type="submit"
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
