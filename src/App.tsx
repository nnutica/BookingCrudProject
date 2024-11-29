import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About/page';
import Home from './homepage/page';

import Navbar from './component/navbar/Navbar';
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
