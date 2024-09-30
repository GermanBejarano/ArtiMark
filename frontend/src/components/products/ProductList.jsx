import React, { useState, useEffect } from 'react';
import { Grid, Box, Image, Text, Button, Badge, useBreakpointValue, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { IconStar, IconShoppingCart } from '@tabler/icons-react';
import { fetchProducts } from '../../services/services';
import { ProductDetails } from './ProductDetails';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const isMobile = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        loadProducts();
    }, []);

    const handleAddToCartClick = (product) => {
        setSelectedProduct(product);
        onOpen();
    };

    return (
        <Grid templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"} gap={6} direction={flexDirection}>
            {products.map(product => (
                <Box key={product.id} maxW='sm' overflow='hidden' bg="white" borderRadius="30px" p={4}>
                    <Box
                        flex={1}
                        alignItems="center"
                        justifyContent="center"
                        alignContent="center"
                        align="center"
                        position="relative"
                    >
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            objectFit="cover"
                            w="100%"
                            h="100%"
                            borderRadius="30px"
                        />
                    </Box>


                    <Box
                        display='flex'
                        justifyContent='space-between'
                        flexDirection='row'
                        alignItems='center'
                    >
                        <Box
                            p='6'
                            flex={1}
                            w='70%'
                        >
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                {product.title}
                            </Box>

                            <Box>
                                {product.price}
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / wk
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            flex={1}
                            w='30%'
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <IconButton
                                icon={<IconShoppingCart stroke={2} />}
                                aria-label="Add to Cart"
                                variant="outline"
                                size="lg"
                                onClick={() => handleAddToCartClick(product)}
                            />
                        </Box>
                    </Box>


                </Box>
            ))}
            {selectedProduct && (
                <ProductDetails
                    product={selectedProduct}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}
        </Grid>
    );
};

export default ProductList;