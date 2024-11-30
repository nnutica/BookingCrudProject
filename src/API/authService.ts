// src/services/authService.ts

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null; // คืนข้อมูลผู้ใช้ ถ้าไม่มีให้คืน null
};

export const getToken = () => {
    return localStorage.getItem("token"); // คืน Token ที่เก็บไว้
};

export const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
};
