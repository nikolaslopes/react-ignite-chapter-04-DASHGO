import { Input as ChakraInput, FormLabel, FormControl } from '@chakra-ui/react'
import { InputProps } from './types'

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel display={'inline-block'} htmlFor={name}>
        {label}
      </FormLabel>
      <ChakraInput
        id={name}
        name={name}
        variant={'filled'}
        focusBorderColor={'pink.500'}
        backgroundColor={'gray.900'}
        _hover={{
          backgroundColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}
