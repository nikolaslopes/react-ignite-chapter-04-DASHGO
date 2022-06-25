import { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ElementType, ReactNode } from 'react'

export interface NavLinkProps {
  icon: ElementType
  children: string
  href: string
}

export interface NavSectionProps {
  title: string
  children: ReactNode
}
