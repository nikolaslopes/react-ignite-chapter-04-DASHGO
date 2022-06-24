import { Icon, Link, Text } from '@chakra-ui/react'
import { NavLinkProps } from './types'

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display={'flex'} alignItems={'center'} {...rest}>
      <Icon as={icon} fontSize={'20'} />
      <Text marginLeft={'4'} fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
