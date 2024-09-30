import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'black',
            }
        }
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                borderRadius: '40px',
            },
            variants: {
                solid: (props) => ({
                    height: '48px',
                    bg: props.colorMode === 'dark' ? '#00b1bd' : '#00b1bd',
                    color: 'white',
                    _hover: {
                        bg: props.colorMode === 'dark' ? '#009dc8' : '#009dc8',
                    },
                }),

                outline: (props) => ({
                    height: '48px',
                    _hover: {
                        bg: "white",
                    },
                }),

                withIcon: {
                    bg: 'blackAlpha.900',
                    color: 'white',
                    _hover: {
                        bg: 'blackAlpha.800',
                    },
                }
            },
        },
        Input: {
            defaultProps: {
                focusBorderColor: 'gray.400',
            },
            baseStyle: {
                field: {
                    borderRadius: '40px',
                    height: '48px',
                    _hover: {
                        borderColor: 'gray.100',
                    },
                    _focus: {
                        boxShadow: '0 0 0 1px #f6ad55',
                    }
                }
            }
        }
    }
});

export default theme;