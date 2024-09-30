import { InputGroup, Input, InputRightElement, Button, InputLeftElement } from '@chakra-ui/react';
import { FormErrorMessage } from '@chakra-ui/react';

export function TextInput({ field, form, icon, placeholder, ...props }) {
  return (
    <InputGroup size='md'>
      <InputLeftElement pointerEvents='none'>
        {icon}
      </InputLeftElement>
      <Input
        type='text' 
        {...field} 
        id={field.name} 
        pr='4.5rem'
        placeholder={placeholder}
      />
      <FormErrorMessage>
        {form.errors[field.name] && form.touched[field.name] && form.errors[field.name]}
      </FormErrorMessage>
    </InputGroup>
  )
}