import React, { useState } from 'react';
import { Box, Flex, VStack, IconButton, Text, Divider, useColorModeValue, Button, Stack, useBreakpointValue } from '@chakra-ui/react';
import { IconHome, IconShoppingBag, IconShoppingCart, IconLogout2, IconMenu2, IconArrowLeftDashed, IconClover } from '@tabler/icons-react';
import Sidebar from '../components/layout/Sidebar';
import { useAuth } from '../context/AuthContext.jsx'; // Asegúrate de que la ruta es correcta


function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const { auth } = useAuth(); 
    const isMobile = useBreakpointValue({ base: true, md: false });
    console.log("Token:", auth.token); 

    return (
        <Flex h="100vh" direction={isMobile || !isSidebarOpen ? 'column' : 'row'}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <Box flex="1" p={5}>
                <Text fontSize="4xl" fontWeight="bold" mb={4} textAlign="center">
                    Bienvenido
                </Text>
            </Box>
        </Flex>
    );
}

export default Dashboard;