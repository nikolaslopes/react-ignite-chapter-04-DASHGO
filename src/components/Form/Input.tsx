import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Input as ChakraInput, FormLabel, FormControl } from '@chakra-ui/react'
import { InputProps } from './types'

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { idName, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      <FormLabel display={'inline-block'} htmlFor={idName}>
        {label}
      </FormLabel>
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
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
