import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, VStack, Text } from '@chakra-ui/react';
import * as Yup from 'yup';
import { EmailInput, PasswordInput, TextInput } from '../../components/inputs';
import { IconPhone, IconUser } from '@tabler/icons-react';
import { registerUser } from '../../services/services'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '@chakra-ui/react'; // Importa useToast

export const SignUpForm = ({ onSignInClick }) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const toast = useToast(); // Inicializa el hook useToast

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        phone: Yup.string().required('Required')
    });

    const handleLoginSuccess = (data) => {
        login(data);
        navigate('/dashboard');
    };

    return (
        <Formik
            initialValues={{ email: '', password: '', name: '', phone: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                try {
                    const payload = {
                        email: values.email,
                        password: values.password,
                        fullName: values.name,
                        phone: values.phone
                    };
                    const response = await registerUser(payload); 
                    if (!response.token) 
                        throw new Error('No se pudo registrar el usuario');

                    handleLoginSuccess(response);
                } catch (error) {
                    console.error('Registration error:', error);
                    toast({
                        title: "Error de registro",
                        description: "No se pudo completar el registro. Por favor, intente nuevamente.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        position: "top"
                    });
                }
                setSubmitting(false);
            }}
        >
            {({ isValid, isSubmitting }) => (
                <Form>
                    <VStack spacing={4} w="full" maxW="md" p={8}>
                        <Text fontSize="32px" fontWeight="bold" color="#00b1bd">
                            Bienvenidos
                        </Text>
                        <Field name="email" type="email" >
                            {({ field, form }) => <EmailInput field={field} form={form} />}
                        </Field>
                        <ErrorMessage name="email" component={Text} color="red.500" />

                        <Field name="password" type="password">
                            {({ field, form }) => <PasswordInput field={field} form={form} />}
                        </Field>
                        <ErrorMessage name="password" component={Text} color="red.500" />

                        <Field name="name" type="text" >
                            {({ field, form }) => <TextInput
                                field={field}
                                form={form}
                                icon={<IconUser stroke={1} />}
                                placeholder="Nombre"
                            />}
                        </Field>
                        <ErrorMessage name="name" component={Text} color="red.500" />

                        <Field name="phone" type="text" >
                            {({ field, form }) => <TextInput
                                field={field}
                                form={form}
                                icon={<IconPhone stroke={1} />}
                                placeholder="Teléfono"
                            />}
                        </Field>
                        <ErrorMessage name="phone" component={Text} color="red.500" />

                        <Button
                            type="submit"
                            w="full"
                            colorScheme="orange"
                            disabled={!isValid || isSubmitting}
                        >
                            Registrarse
                        </Button>
                        <Button
                            onClick={onSignInClick}
                            w="full"
                            colorScheme="teal"
                            variant="outline"
                        >
                            Iniciar Sesión
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    );
};