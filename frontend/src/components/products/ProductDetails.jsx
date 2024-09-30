import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, Text, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { useCart } from '../../context/CartContext'; // Importa el hook del contexto

export const ProductDetails = ({ product, isOpen, onClose }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: product });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius="20px">
                <ModalHeader>{product.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        borderRadius="20px"
                    />

                    <Text>{product.description}</Text>
                    <NumberInput defaultValue={1} min={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="#000" mr={3} onClick={onClose} variant="outline">
                        Cerrar
                    </Button>
                    <Button
                        onClick={handleAddToCart}
                        variant="ghost">
                        Agregar al carrito
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

// export default ProductDetails;
