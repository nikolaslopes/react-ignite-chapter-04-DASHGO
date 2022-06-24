import { Button } from '@chakra-ui/react'
import { PaginationItemProps } from './types'

export function PaginationItem({
  pageNumber,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size={'sm'}
        fontSize={'xs'}
        width={'4'}
        colorScheme={'pink'}
        disabled
        _disabled={{
          cursor: 'default',
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size={'sm'}
      fontSize={'xs'}
      width={'4'}
      backgroundColor={'gray.700'}
      _hover={{
        backgroundColor: 'gray.500',
      }}
    >
      {pageNumber}
    </Button>
  )
}
