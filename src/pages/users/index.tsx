import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { useUsers } from '../../services/users/useUsers'

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers()

  const [page, setPage] = useState(1)

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex
        width={'100%'}
        maxWidth={'1480px'}
        marginY={'6'}
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
          <Flex
            marginBottom={'8'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Heading size={'lg'} fontWeight={'normal'}>
              Users
              {!isLoading && isFetching && (
                <Spinner size={'sm'} marginLeft={'4'} color={'gray.500'} />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as={'a'}
                size={'sm'}
                colorScheme={'pink'}
                leftIcon={<Icon as={RiAddLine} fontSize={'20'} />}
              >
                Create new
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify={'center'}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify={'center'}>
              <Text>Fail to fetch users :(</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme={'whiteAlpha'}>
                <Thead>
                  <Tr>
                    <Th width={['4', '4', '6']} color={'gray.300'}>
                      <Checkbox colorScheme={'pink'} />
                    </Th>
                    <Th>User</Th>

                    {isWideVersion && <Th>Registration date</Th>}

                    <Th width={'8'}></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data?.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td width={['4', '4', '6']}>
                          <Checkbox colorScheme={'pink'} />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight={'bold'}>{user.name}</Text>
                            <Text fontSize={'sm'} color={'gray.300'}>
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          <Button
                            as={'a'}
                            size={isWideVersion ? 'sm' : 'xs'}
                            colorScheme={'purple'}
                            backgroundColor={'purple.700'}
                            leftIcon={
                              <Icon
                                marginLeft={!isWideVersion ? '2' : 0}
                                as={RiPencilLine}
                                fontSize={20}
                              />
                            }
                          >
                            {isWideVersion && 'Edit'}
                          </Button>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={200}
                currentPage={2}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
