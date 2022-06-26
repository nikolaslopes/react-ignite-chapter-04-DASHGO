import { forwardRef, ForwardRefRenderFunction } from 'react'
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { InputProps } from './types'

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { idName, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {label && (
        <FormLabel display={'inline-block'} htmlFor={idName}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        id={idName}
        name={idName}
        variant={'filled'}
        focusBorderColor={'pink.500'}
        backgroundColor={'gray.900'}
        _hover={{
          backgroundColor: 'gray.900',
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
