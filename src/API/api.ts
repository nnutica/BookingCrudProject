import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const createMember = async (userData: { name: string; lastName: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/members`, {
            data: {
                Name: userData.name,
                LastName: userData.lastName,
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



// ฟังก์ชันในการ login user
export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/local`, {
            identifier: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};
