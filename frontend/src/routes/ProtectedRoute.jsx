import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // Asegúrate de que la ruta es correcta

const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth(); // Usando el hook useAuth para acceder al estado de autenticación

    if (!auth.isAuthenticated) {
        // Si no está autenticado, redirigir al login
        return <Navigate to="/" replace />;
    }

    // Si está autenticado, renderizar los children pasados al componente
    return children;
};

export default ProtectedRoute;
