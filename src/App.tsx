import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import Navbar from './component/navbar/Navbar';
import PaymentPage from './page/Payment';
import ProcessingPage from './page/ProcessingPage';
import PaymentSuccessPage from './page/PaymentSuccess';


function App() {


  return (
    <Router>
      <Navbar className="fixed top-0 left-0 w-full z-10 bg-white" />

      <main className="pt-16 ml-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />



        </Routes>
      </main>

    </Router>
  );
}

export default App
