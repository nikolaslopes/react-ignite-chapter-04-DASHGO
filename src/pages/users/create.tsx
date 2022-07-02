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
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { UserCreateFormSchema } from '../../components/Form/Input/schema'
import { UserCreateFormData } from '../../services/users/types'

export default function UserCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreateFormData>({
    resolver: yupResolver(UserCreateFormSchema),
  })

  const handleCreateUser: SubmitHandler<UserCreateFormData> = async (data) => {
    console.log(data)
  }

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
          as={'form'}
          flex={'1'}
          borderRadius={'8'}
          backgroundColor={'gray.800'}
          padding={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size={'lg'} fontWeight={'normal'}>
            Create User
          </Heading>

          <Divider marginY={'6'} borderColor={'gray.700'} />

          <Stack spacing={'8'}>
            <SimpleGrid minChildWidth={'240px'} spacing={['6', '8']}>
              <Input
                idName="name"
                label="Full name"
                error={errors.name}
                {...register('name')}
              />
              <Input
                idName="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing={['6', '8']}>
              <Input
                idName="password"
                label="Password"
                error={errors.password}
                {...register('password')}
              />
              <Input
                idName="password_confirmation"
                label="Confirm passowrd"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </Stack>

          <Flex marginTop={'8'} justifyContent={'flex-end'}>
            <HStack spacing={'4'}>
              <Link href="/users" passHref>
                <Button as={'a'} width="20" colorScheme={'whiteAlpha'}>
                  Cancel
                </Button>
              </Link>
              <Button type="submit" width="20" colorScheme={'pink'}>
                Confirm
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
