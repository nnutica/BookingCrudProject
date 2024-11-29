
import '../component.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-blue-600">
            Room<span className="text-gray-800">Snap</span>
            </a>
    
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-gray-700">
                <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                <li><a href="#rooms" className="hover:text-blue-600">Rooms</a></li>
                <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
    
            {/* Login Button */}
            <div className="hidden md:flex items-center space-x-4">
                <a
                    href="#login"
                    className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                >
                    Login
                </a>
            </div>
    
            {/* Mobile Menu Toggle */}
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label
                htmlFor="menu-toggle"
                className="md:hidden cursor-pointer text-gray-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </label>
        </div>
    
        {/* Mobile Menu */}
        <div className="hidden peer-checked:block md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 text-gray-700 p-4">
                <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                <li><a href="#rooms" className="hover:text-blue-600">Rooms</a></li>
                <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                <li>
                    <a
                        href="#login"
                        className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-600 hover:text-white"
                    >
                        Login
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar