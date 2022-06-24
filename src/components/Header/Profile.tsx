import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems={'center'}>
      {showProfileData && (
        <Box marginRight={'4'} textAlign={'right'}>
          <Text>Nikolas Lopes</Text>
          <Text color={'gray.300'} fontSize={'small'}>
            nikolaslopes.dev@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        name={'Nikolas Lopes'}
        size={'md'}
        src={'https://github.com/nikolaslopes.png'}
      />
    </Flex>
  )
}
