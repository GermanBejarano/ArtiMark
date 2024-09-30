import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, VStack, Text, useToast } from '@chakra-ui/react';
import * as Yup from 'yup';
import { EmailInput, PasswordInput } from '../../components/inputs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { loginUser } from '../../services/services'; 


export const LoginForm = ({ onSignUpClick }) => {
    const navigate = useNavigate();
    const { login, auth } = useAuth();
    const toast = useToast(); // Inicializa el hook useToast

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required')
    });

    console.log("Token:", auth.token);

    const handleLoginSuccess = (data) => {
        login(data);
        navigate('/dashboard');
    };

    return (
        <Formik
            initialValues={{ email: 'german.test@gmail.com', password: 'Abc123' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                console.log('values:', values);
                try {
                    const userData = await loginUser(values); 
                    console.log('userData:', userData);
                    handleLoginSuccess(userData);
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        console.error('Error:', error.response.data.message);
                        toast({
                            title: "Error de autenticación",
                            description: error.response.data.message,
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                            position: "top"
                        });
                    } else {
                        console.error('Error:', error);
                        toast({
                            title: "Error de conexión",
                            description: "No se pudo conectar al servidor. Intente nuevamente más tarde.",
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                            position: "top"
                        });
                    }
                    // Manejar el error mostrando un mensaje al usuario, por ejemplo
                }
                setSubmitting(false);
            }}
        >
            {({ isValid, isSubmitting }) => (
                <Form>
                    <VStack spacing={4} w="full" maxW="md" p={8}>
                        <Text fontSize="32px" fontWeight="bold" color="#00b1bd">
                            Bienvenido
                        </Text>
                        <Field name="email" type="email" >
                            {({ field, form }) => <EmailInput field={field} form={form} />}
                        </Field>
                        <ErrorMessage name="email" component={Text} color="red.500" />
                        <Field name="password" type="password">
                            {({ field, form }) => <PasswordInput field={field} form={form} />}
                        </Field>
                        <ErrorMessage name="password" component={Text} color="red.500" />
                        <Button type="submit" w="full" colorScheme="orange" disabled={!isValid || isSubmitting}>
                            Ingresar
                        </Button>
                        <Button onClick={onSignUpClick} w="full" colorScheme="teal" variant="outline">
                            Registrarse
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    );
};
