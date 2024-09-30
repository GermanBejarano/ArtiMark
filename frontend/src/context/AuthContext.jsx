import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: null,
        token: null
    });

    const login = (data) => {
        setAuth({
            isAuthenticated: true,
            user: { id: data.id, email: data.email },
            token: data.token
        });
        localStorage.setItem('token', data.token);
    };

    const logout = () => {
        setAuth({
            isAuthenticated: false,
            user: null,
            token: null
        });
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
