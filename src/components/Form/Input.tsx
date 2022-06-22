import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormLabel,
  FormControl,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  type?: string
  label?: string
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
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
