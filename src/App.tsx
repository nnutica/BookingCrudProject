import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import Navbar from './component/navbar/Navbar';
import PaymentPage from './page/Payment';
import ProcessingPage from './page/ProcessingPage';
import PaymentSuccessPage from './page/PaymentSuccess';
import Roomtype from './page/Roomtype';
import Service from './page/service';
import Ourmember from './page/Ourmember';
function App() {


  return (
    <Router>
      <Navbar />
      <main className="pt-24 ml-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/About-us" element={<Ourmember />} />
          <Route path="/room" element={<Roomtype />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </main>
    </Router>

  )
}

export default App
