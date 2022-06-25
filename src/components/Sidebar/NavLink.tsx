import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { NavLinkProps } from './types'

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href}>
      <ChakraLink display={'flex'} alignItems={'center'} {...rest}>
        <Icon as={icon} fontSize={'20'} />
        <Text marginLeft={'4'} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  )
}
