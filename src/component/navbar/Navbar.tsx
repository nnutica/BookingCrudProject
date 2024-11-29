
import '../component.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='bg-blue-600 text-white shodow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className='text-lg font-bold'>Brand</span>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link to="/About" className="hover:underline">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



        </nav>
    )
}

export default Navbar