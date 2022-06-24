import { Box, Stack, Text } from '@chakra-ui/react'
import { NavSectionProps } from './types'

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight={'bold'} color={'gray.400'} fontSize={'small'}>
        {title}
      </Text>
      <Stack spacing={'4'} marginTop={'8'} align={'stretch'}>
        {children}
      </Stack>
    </Box>
  )
}
