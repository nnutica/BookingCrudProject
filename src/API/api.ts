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

export const loginUsertest = async (email: string) => {
    // ดึง email จากการส่งมาจาก frontend
    if (email === 'dummy@example.com') {
        // สร้างข้อมูล dummy ให้เป็นการตอบกลับสำเร็จ
        return { name: 'Dummy', lastName: 'User' };
    } else {
        // หาก email ไม่ตรงกับ dummy, ให้ throw error
        throw new Error('Email not found');
    }
};

export const loginUser = async (email: string) => {
    try {
        const response = await axios.post(`${API_URL}/members/login`, { email });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Login failed:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};
