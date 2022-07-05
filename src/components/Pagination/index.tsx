import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'
import { PaginationProps } from './types'

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((item, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegisters = 0,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Stack
      direction={['column', 'row']}
      marginTop={'6'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <strong>{registerPerPage}</strong> - <strong>10</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <HStack>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <Text color={'gray.300'} width={'8'} textAlign={'center'}>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                pageNumber={page}
                onPageChange={(pageNumber) => onPageChange(pageNumber)}
              />
            )
          })}

        <PaginationItem
          pageNumber={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                pageNumber={page}
                onPageChange={onPageChange}
              />
            )
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color={'gray.300'} width={'8'} textAlign={'center'}>
                ...
              </Text>
            )}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </HStack>
    </Stack>
  )
}
