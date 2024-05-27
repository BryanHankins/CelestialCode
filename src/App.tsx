import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ReferralLinks from './pages/ReferralLinks';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacypolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen emerald text-black flex flex-col">
        <Navbar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/referral-links" element={<ReferralLinks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
