
import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import ProductList from '../components/products/ProductList';

const HomePage = () => {
    return (
        <Container maxW="container.xl" py={8}>
            <Heading as="h1" mb={8}>
                Our Products
            </Heading>
            <ProductList />
        </Container>
    );
};

export default HomePage;