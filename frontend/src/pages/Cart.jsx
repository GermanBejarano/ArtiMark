import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { IconTrash } from '@tabler/icons-react';
import {
    Box, Text, Button, Flex, Table, Thead, Tbody, Tr, Th,
    Td, Image, TableContainer, TableCaption, Tfoot, Heading,
    IconButton, Divider, useBreakpointValue, useToast
} from '@chakra-ui/react';
import { fetchOrders } from '../services/services';
import Sidebar from '../components/layout/Sidebar';
import { useAuth } from '../context/AuthContext';
const CartPage = () => {
    const toast = useToast();
    const { cart, dispatch } = useCart();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const isMobile = useBreakpointValue({ base: true, md: false });
    const handleRemoveItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    };
    const { auth } = useAuth();
    console.log('token: ', auth.token);

    const totalCartValue = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const handleSubmit = async () => {
        try {
            console.log(cart);
            const payload = {
                total: totalCartValue,
                state: 'pending',
                details: cart.map(item => ({
                    total: item.price * item.quantity,
                    product: { id: item.id },
                    quantity: item.quantity,
                    price: item.price
                }))
            };
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            }

            console.log('payload: ', payload);
            const response = await fetchOrders(payload, headers);
            console.log('Order processed:', response);
            handleClearCart();
            toast({
                title: "Pedido completado",
                description: "Tu pedido ha sido procesado correctamente.",
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top"
            });
        } catch (error) {
            console.error('Error processing order:', error);
            toast({
                title: "Error de conexión",
                description: "No se pudo conectar al servidor.",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top"
            });
        }
    };

    return (
        <Flex h="100vh" direction={isMobile ? 'column' : 'row'}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            {cart.length === 0 ? (
                <Box overflowX="auto" w={"100%"} h="100%" display="flex" justifyContent="center" flexDirection="column">
                    <Heading as="h2" size="xl" textAlign="center" my={5}>
                        Tu Carrito de Compras
                    </Heading>
                    <Box mt={4} textAlign="center">
                        <Text fontSize="xl">No hay productos en el carrito.</Text>
                    </Box>
                </Box>

            ) : (
                <Box overflowX="auto" display="flex" justifyContent="center" w="100%">
                    <Box w="full" maxW="960px">
                        <Heading as="h2" size="xl" textAlign="center" my={5}>
                            Tu Carrito de Compras
                        </Heading>
                        <Divider my={5} />
                        <TableContainer >
                            <Table variant="simple" >
                                <Thead>
                                    <Tr>
                                        <Th>Producto</Th>
                                        <Th>Image</Th>
                                        <Th isNumeric>Quantity</Th>
                                        <Th isNumeric>Total Price</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {cart.map(item => (
                                        <Tr key={item.id}>
                                            <Td>{item.title}</Td>
                                            <Td><Image src={item.image} boxSize="50px" objectFit="cover" /></Td>
                                            <Td isNumeric>{item.quantity}</Td>
                                            <Td isNumeric>${(item.price * item.quantity).toFixed(2)}</Td>
                                            {/* <Td><Button onClick={() => handleRemoveItem(item.id)}>Eliminar</Button></Td> */}
                                            <Td>
                                                <IconButton
                                                    icon={<IconTrash stroke={2} />}
                                                    aria-label="Eliminar"
                                                    variant="ghost"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    m={4}
                                                    size="lg"
                                                    alignSelf="flex-start"
                                                />
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                                {/* <Tfoot>
                                    <Tr>
                                        <Th>To convert</Th>
                                        <Th>into</Th>
                                        <Th isNumeric>multiply by</Th>
                                        <Th isNumeric>multiply by</Th>
                                        <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Tfoot> */}
                                <TableCaption
                                    textAlign="left"
                                    fontWeight="bold"
                                    fontSize="lg"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text>
                                        Total: ${totalCartValue.toFixed(2)}
                                    </Text>
                                    <Button
                                        colorScheme="blue"
                                        mt={4}
                                        onClick={handleSubmit}
                                    >
                                        Pagar
                                    </Button>
                                </TableCaption>
                            </Table>
                        </TableContainer>

                    </Box>
                </Box>
            )}
        </Flex>
    );
};

export default CartPage;
