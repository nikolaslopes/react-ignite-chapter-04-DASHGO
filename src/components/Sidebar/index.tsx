import { Box, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar() {
  return (
    <Box as={'aside'} width={'64'} marginRight={'8'}>
      <Stack spacing={'12'}>
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Users</NavLink>
        </NavSection>

        <NavSection title="AUTOMATION">
          <NavLink icon={RiInputMethodLine}>Forms</NavLink>
          <NavLink icon={RiGitMergeLine}>Automation</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}
