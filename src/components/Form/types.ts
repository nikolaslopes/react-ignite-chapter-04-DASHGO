import { InputProps as ChakraInputProps } from '@chakra-ui/react'

export interface InputProps extends ChakraInputProps {
  idName: string
  type?: string
  label?: string
}
