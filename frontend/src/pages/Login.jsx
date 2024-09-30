import React, { useState } from 'react';
import { Box, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import loginImage from '../assets/img/Login_image.jpg';
import { LoginForm, SignUpForm } from '../components/auth';
import '../styles/LoginPage.css';

function LoginPage() {
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const isMobile = useBreakpointValue({ base: true, md: false });
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <Flex minH="100vh" w="100vw" p={0} direction={flexDirection} overflow="hidden" align="stretch">
            <Box
                flex={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={showSignUp && !isMobile ? "form-move-right" : "form-stay"}
            >
                {!showSignUp ? (
                    <LoginForm onSignUpClick={() => setShowSignUp(true)} />
                ) : (
                    <SignUpForm onSignInClick={() => setShowSignUp(false)} />
                )}
            </Box>
            <Box
                flex={1}
                display={{ base: 'none', md: 'block' }}
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                className={showSignUp ? "image-move-left" : "image-stay"}
            >
                <Image
                    src={loginImage}
                    alt="Login Image"
                    w="95%"
                    h="95%"
                    objectFit="cover"
                    borderRadius="30px"
                />
            </Box>
        </Flex>
    );
}

export default LoginPage;