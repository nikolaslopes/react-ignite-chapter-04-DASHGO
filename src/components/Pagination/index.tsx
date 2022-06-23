import { Box, Button, HStack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <HStack marginTop={'8'} justifyContent={'space-between'}>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <PaginationItem pageNumber={1} isCurrent={true} />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
      </HStack>
    </HStack>
  )
}
