import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ReferralLinks from './pages/ReferralLinks';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacypolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const handleGoogleTagManager = () => {
      if (window.gtag) {
        window.gtag('config', 'AW-16570659253');
      }
    };

    handleGoogleTagManager();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/referral-links" element={<ReferralLinks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
