import { Box, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'
import { NavSection } from './NavSection'

export function Sidebar() {
  return (
    <Box as={'aside'} width={'64'} marginRight={'8'}>
      <Stack spacing={'12'}>
        <NavSection title="GERAL">
          <Link display={'flex'} alignItems={'center'}>
            <Icon as={RiInputMethodLine} fontSize={'20'} />
            <Text marginLeft={'4'} fontWeight="medium">
              Forms
            </Text>
          </Link>

          <Link display={'flex'} alignItems={'center'}>
            <Icon as={RiGitMergeLine} fontSize={'20'} />
            <Text marginLeft={'4'} fontWeight="medium">
              Automation
            </Text>
          </Link>
        </NavSection>

        <NavSection title="AUTOMATION">
          <Link display={'flex'} alignItems={'center'}>
            <Icon as={RiInputMethodLine} fontSize={'20'} />
            <Text marginLeft={'4'} fontWeight="medium">
              Forms
            </Text>
          </Link>

          <Link display={'flex'} alignItems={'center'}>
            <Icon as={RiGitMergeLine} fontSize={'20'} />
            <Text marginLeft={'4'} fontWeight="medium">
              Automation
            </Text>
          </Link>
        </NavSection>
      </Stack>
    </Box>
  )
}
