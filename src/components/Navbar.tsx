import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icon.png'; // Import your logo here

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Celestial Code LLC Logo" className="h-10 w-10 mr-2" />
          <div className="text-black text-lg font-bold">Celestial Code LLC</div>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-gray-900">About</NavLink>
          <a href="https://celestialcode.myshopify.com/" className="text-gray-700 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Store</a>
          <NavLink to="/bloglist" className="text-gray-700 hover:text-gray-900">Blog</NavLink>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              Referral Links
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2">
                <NavLink to="/referral-links" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Company Referrals</NavLink>
                <NavLink to="/amazon-referrals" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Amazon Referrals</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/contact" className="text-gray-700 hover:text-gray-900">Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-4">
            <NavLink to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu}>About</NavLink>
            <a href="https://celestialcode.myshopify.com/" className="text-gray-700 hover:text-gray-900" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Store</a>
            <NavLink to="/bloglist" className="text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu}>Blog</NavLink>
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-gray-900 focus:outline-none">Referral Links</button>
            {isDropdownOpen && (
              <div className="bg-white shadow-lg rounded-md w-full">
                <NavLink to="/referral-links" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Company Referrals</NavLink>
                <NavLink to="/amazon-referrals" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Amazon Referrals</NavLink>
              </div>
            )}
            <NavLink to="/contact" className="text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
