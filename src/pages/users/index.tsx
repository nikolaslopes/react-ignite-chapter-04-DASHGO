import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { RiAddLine, RiEditLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
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
            </Heading>

            <Button
              as={'a'}
              size={'sm'}
              colorScheme={'pink'}
              leftIcon={<Icon as={RiAddLine} fontSize={'20'} />}
            >
              Create new
            </Button>
          </Flex>

          <Table colorScheme={'whiteAlpha'}>
            <Thead>
              <Tr>
                <Th width={'8'} color={'gray.300'}>
                  <Checkbox colorScheme={'pink'} />
                </Th>
                <Th>User</Th>
                <Th>Registration date</Th>
                <Th width={'8'}></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme={'pink'} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={'bold'}>Nikolas Lopes</Text>
                    <Text fontSize={'sm'} color={'gray.300'}>
                      niko@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de abril, 2021</Td>
                <Td>
                  <Button
                    as={'a'}
                    size={'sm'}
                    colorScheme={'purple'}
                    leftIcon={<Icon as={RiPencilLine} fontSize={'16'} />}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
