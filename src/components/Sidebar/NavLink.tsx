import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'
import { NavLinkProps } from './types'

export function NavLink({ icon, children, href }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display={'flex'} alignItems={'center'}>
        <Icon as={icon} fontSize={'20'} />
        <Text marginLeft={'4'} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
