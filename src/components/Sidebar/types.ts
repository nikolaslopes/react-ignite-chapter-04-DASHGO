import { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ElementType, ReactNode } from 'react'

export interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
}

export interface NavSectionProps {
  title: string
  children: ReactNode
}
