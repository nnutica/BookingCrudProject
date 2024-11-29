
import '../component.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    Room<span className="text-gray-800">Snap</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700">

                    <li><Link to="/" className='hover:text-blue-600'>Home</Link></li>
                    <li><Link to="/about" className='hover:text-blue-600'>About</Link></li>
                    <li><a href="#rooms" className="hover:text-blue-600">Rooms</a></li>
                    <li><a href="#services" className="hover:text-blue-600">Services</a></li>
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
            </div>
        </nav>
    )
}

export default Navbar