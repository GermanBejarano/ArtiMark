import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
            <Image src={product.image} alt={product.name} />
            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <
                        Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide" color="teal.600">
                        {product.category}
                    </Text>
                </Box>
                <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {product.name}
                </Text>
                <Text>
                    ${product.price}
                </Text>
                <Button colorScheme="teal" mt="3">
                    Add to Cart
                </Button>
            </Box>
        </Box>
    );
};
export default ProductCard;