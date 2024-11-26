import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About/page'
function App() {


  return (
    <Router>
      <div>
        <h1>Hello World</h1>

        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<div>Welcome to Home Page</div>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
