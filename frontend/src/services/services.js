import apiClient from './apiConfig';

export const fetchProducts = async () => {
    try {
        const response = await apiClient.get('/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (payload) => {
    try {
        const response = await apiClient.post('/auth/register', payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (payload) => {
    try {
        const response = await apiClient.post('/auth/login', payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchOrders = async (payload, headers) => {
    try {
        const response = await apiClient.post('/orders', payload, { headers: headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};