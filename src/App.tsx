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
import { Footer } from './component/footer/footer';
import Rooms from './page/Rooms';
import Booking from './page/Booking';

function App() {


  return (
    <Router>
      <Navbar className="fixed top-0 left-0 w-full z-10 bg-white" />

      <main className="pt-16 ml-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/About-us" element={<Ourmember />} />
          <Route path="/room" element={<Roomtype />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
