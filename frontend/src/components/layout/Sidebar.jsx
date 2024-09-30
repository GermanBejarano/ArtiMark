import React from 'react';
import { Box, IconButton, Flex, Button, VStack, Text, Divider, Stack, useColorModeValue, useBreakpointValue, Spacer } from '@chakra-ui/react';
import { IconHome, IconShoppingBag, IconShoppingCart, IconLogout2, IconMenu2, IconArrowLeftDashed, IconClover } from '@tabler/icons-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const bgSidebar = useColorModeValue('gray.800', 'gray.800');
    const colorIcons = useColorModeValue('white', 'white');
    const hoverBg = useColorModeValue('gray.700', 'gray.600');
    const isMobile = useBreakpointValue({ base: true, md: false });
    const sidebarWidth = useBreakpointValue({ base: "100vw", md: "250px" });

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleProducts = () => {
        navigate('/products');
    };

    const handleDashboard = () => {
        navigate('/dashboard');
    };

    const handleCart = () => {
        navigate('/cart');
    };

    return (
        <>
            {isSidebarOpen && (
                <Box w={sidebarWidth} bg={bgSidebar} color="white" p={5} borderRadius="0 28px 28px 0" position="relative">
                    <Flex justifyContent="flex-end">
                        <IconButton
                            icon={<IconArrowLeftDashed stroke={2} />}
                            aria-label="Toggle Sidebar"
                            variant="outline"
                            onClick={toggleSidebar}
                            color={colorIcons}
                            bg={bgSidebar}
                            _hover={{ bg: hoverBg }}
                            size="lg"
                            position="absolute"
                            top="10px"
                            right="-20px"
                        />
                    </Flex>
                    <VStack align="stretch" spacing={4} h="100%">
                        <Stack
                            direction='row'
                            spacing={2}
                            borderColor='gray.700'
                            pb={5}
                            mb={5}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <IconClover stroke={2} />
                            <Text fontSize="xl" fontWeight="bold">
                                ArtiMark
                            </Text>
                        </Stack>
                        <Button
                            leftIcon={<IconHome stroke={2} />}
                            variant='ghost'
                            justifyContent='flex-start'
                            fontSize='16px'
                            iconSpacing={4}
                            color={colorIcons}
                            _hover={{ bg: hoverBg }}
                            onClick={handleDashboard}
                        >
                            Inicio
                        </Button>
                        <Button
                            leftIcon={<IconShoppingBag stroke={2} />}
                            variant='ghost'
                            justifyContent='flex-start'
                            fontSize='16px'
                            iconSpacing={4}
                            color={colorIcons}
                            _hover={{ bg: hoverBg }}
                            onClick={handleProducts}
                        >
                            Productos
                        </Button>

                        <Button
                            leftIcon={<IconShoppingCart stroke={2} />}
                            variant='ghost'
                            justifyContent='flex-start'
                            fontSize='16px'
                            iconSpacing={4}
                            color={colorIcons}
                            _hover={{ bg: hoverBg }}
                            onClick={handleCart}
                        >
                            Carrito
                        </Button>

                        <Spacer />
                        <Divider my={1} opacity="0.6" />
                        <Button
                            leftIcon={<IconLogout2 stroke={2} />}
                            variant='ghost'
                            justifyContent='flex-start'
                            fontSize='16px'
                            iconSpacing={4}
                            color={colorIcons}
                            _hover={{ bg: hoverBg }}
                            onClick={handleLogout}
                        >
                            Sign Out
                        </Button>
                    </VStack>
                </Box>
            )}
            {!isSidebarOpen && (
                <IconButton
                    icon={<IconMenu2 stroke={2} />}
                    aria-label="Toggle Sidebar"
                    variant="outline"
                    onClick={toggleSidebar}
                    m={4}
                    size="lg"
                    alignSelf="flex-start"
                />
            )}
        </>
    );
}

export default Sidebar;
