import React, { useState } from 'react';
import { loginUser } from '../API/api'; // นำเข้าฟังก์ชัน loginUser
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // รีเซ็ตข้อความ Error
        try {
            const response = await loginUser(email); // เรียก API loginUser
            console.log('Logged in user:', response); // ล็อกข้อมูลผู้ใช้ที่ได้จาก Backend
            navigate('/'); // ย้ายไป Path "/"
        } catch (err) {
            setError('Login failed. Please check your email and try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">Don't have an account?</p>
                    <Link
                        to="/register"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        Register here
                    </Link>
                </div>
                {error && <p className="text-sm text-center text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
