import { InputGroup, Input, InputRightElement, Button, InputLeftElement } from '@chakra-ui/react';
import { IconMail } from '@tabler/icons-react';
import { FormErrorMessage } from '@chakra-ui/react';

export function EmailInput({ field, form, ...props }) {
  return (
    <InputGroup size='md'>
      <InputLeftElement pointerEvents='none'>
        <IconMail stroke={1} />
      </InputLeftElement>
      <Input
        type='email' 
        {...field} 
        id={field.name} 
        pr='4.5rem'
        placeholder='Email'
      />
      <FormErrorMessage>
        {form.errors[field.name] && form.touched[field.name] && form.errors[field.name]}
      </FormErrorMessage>
    </InputGroup>
  )
}