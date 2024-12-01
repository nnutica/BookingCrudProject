import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    className?: string; // รองรับ prop className
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    // State สำหรับชื่อผู้ใช้ที่ล็อกอิน
    const [user, setUser] = useState<{ name: string } | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // ฟังก์ชันเพื่อแสดง dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // ฟังก์ชันการออกจากระบบ (ตัวอย่างการ reset state)
    const handleLogout = () => {
        setUser(null); // ลบข้อมูลผู้ใช้เมื่อ logout
    };

    return (
        <nav className={`bg-white shadow-md fixed w-full ${className || ''}`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    Room<span className="text-gray-800">Snap</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700">
                    <li><Link to="/" className='hover:text-blue-600'>Home</Link></li>
                    <li><Link to="/about" className='hover:text-blue-600'>About</Link></li>
                    <li><Link to="/room" className='hover:text-blue-600'>Rooms</Link></li>
                    <li><Link to="/service" className='hover:text-blue-600'>Service</Link></li>
                    <li><Link to="/about-us" className='hover:text-blue-600'>Our-Member</Link></li>
                </ul>

                {/* Login / User Dropdown */}
                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        // ถ้ามีผู้ใช้ที่ล็อกอิน
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                            >
                                {user.name}
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                                    <Link
                                        to="/record"
                                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                    >
                                        Record
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-100"
                                    >
                                        Log out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        // ถ้ายังไม่ได้ล็อกอิน
                        <Link
                            to="/login"
                            className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
