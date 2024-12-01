import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const registerUser = async (userData: { name: string; lastName: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/members`, {
            data: {
                Name: userData.name,
                lastName: userData.lastName,
                Email: userData.email,
                Password: userData.password,
            },
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Failed to create member:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
        });
        return response.data; // จะได้ JWT token และ user data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Failed to login:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};

