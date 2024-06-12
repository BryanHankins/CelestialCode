import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ReferralLinks from './pages/ReferralLinks';
import AmazonReferrals from './pages/AmazonReferrals';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacypolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Printer from './pages/Printer'
import LaptopArticle from './pages/LaptopGuideArticle'
import Blog from './components/Bloglist'
import Top7Laptops from './Blog/Top7Laptops';

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
            <Route path="/amazon-referrals" element={<AmazonReferrals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/printer" element={<Printer/>} />
            <Route path="/LaptopArticle" element={<LaptopArticle/>} />
            <Route path="/blog/top-7-laptops" element={<Top7Laptops/>} />
            <Route path="/BlogList" element={<Blog/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
