import { useState } from 'react';
import { InputGroup, Input, InputRightElement, Button, InputLeftElement } from '@chakra-ui/react';
import { IconEye, IconEyeOff, IconLock } from '@tabler/icons-react';

export function PasswordInput({ field, form, ...props }) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <InputLeftElement pointerEvents='none'>
        <IconLock stroke={1}  />
      </InputLeftElement>
      <Input
        {...field} 
        id={field.name} 
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} bg="gray.100" _hover={{ bg: "gray.100" }}>
          {show ? <IconEye color="gray" /> : <IconEyeOff color="gray" />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}