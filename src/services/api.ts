import axios from "axios";

const API_BASE_URL = "https://hotelproject-db.onrender.com/api";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// ตัวอย่างฟังก์ชันสำหรับ API
export const registerUser = async (data: { Name: string; Email: string; phone: string; }) => {
    const response = await api.post("/members", { data });
    return response.data;
};

export const loginUser = async (email: string) => {
    const response = await api.get(`/members?filters[Email][$eq]=${email}`);
    return response.data;
};
