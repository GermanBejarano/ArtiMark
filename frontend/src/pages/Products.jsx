import React, { useState } from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import ProductList from '../components/products/ProductList';
import Sidebar from '../components/layout/Sidebar';
import { useAuth } from '../context/AuthContext.jsx';

const ProductsPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const { auth } = useAuth(); // Usando el hook useAuth para acceder al contexto
    console.log("Token:", auth.token);

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex h="100vh" direction={isMobile || !isSidebarOpen ? 'column' : 'row'}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <Box flex="1" p={5}>
                <ProductList />
            </Box>
        </Flex>
    );
};

export default ProductsPage;