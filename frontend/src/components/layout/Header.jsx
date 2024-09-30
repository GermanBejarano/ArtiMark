import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <Box p={4} bg="blue.500" color="white">
      <Button onClick={handleLoginRedirect}>Login</Button>
    </Box>
  );
}

export default Header;