import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((item, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage)

  console.log('LAST_PAGE', lastPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  console.log('PREVIOUS_PAGE', previousPages)

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  console.log('NEXT_PAGE', nextPages)

  return (
    <Stack
      direction={['column', 'row']}
      marginTop={'6'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <strong>{}</strong> - <strong>10</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <HStack>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color={'gray.300'} width={'8'} textAlign={'center'}>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem key={page} pageNumber={page} />
          })}

        <PaginationItem pageNumber={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem key={page} pageNumber={page} />
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color={'gray.300'} width={'8'} textAlign={'center'}>
                ...
              </Text>
            )}
            <PaginationItem pageNumber={lastPage} />
          </>
        )}
      </HStack>
    </Stack>
  )
}
