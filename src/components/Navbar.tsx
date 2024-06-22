import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icon.png'; // Import your logo here

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="bg-emerald p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Celestial Code LLC Logo" className="h-8 w-8 mr-2" />
          <div className="text-white text-lg font-bold">Celestial Code LLC</div>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-90' : ''
            }`}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex flex-wrap justify-center">
          <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mx-4' : 'text-white hover:text-gray-300 mx-4'
              }
              end
            >
              Home
            </NavLink>
          </div>
          <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mx-4' : 'text-white hover:text-gray-300 mx-4'
              }
            >
              About
            </NavLink>
          </div>
          <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
            <NavLink
              to="/Store"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mx-4' : 'text-white hover:text-gray-300 mx-4'
              }
            >
              Store
            </NavLink>
          </div>
          <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
            <NavLink
              to="/BlogList"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mx-4' : 'text-white hover:text-gray-300 mx-4'
              }
            >
              Blog
            </NavLink>
          </div>
          <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0 relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 mx-4 focus:outline-none"
            >
              Referral Links
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2">
                <NavLink
                  to="/referral-links"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Company Referrals
                </NavLink>
                <NavLink
                  to="/amazon-referrals"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Amazon Referrals
                </NavLink>
              </div>
            )}
          </div>
          <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mx-4' : 'text-white hover:text-gray-300 mx-4'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-4">
          <div className="flex flex-col items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mb-4' : 'text-white hover:text-gray-300 mb-4'
              }
              end
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mb-4' : 'text-white hover:text-gray-300 mb-4'
              }
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 mb-4 focus:outline-none"
            >
              Referral Links
            </button>
            {isDropdownOpen && (
              <div className="bg-white shadow-lg rounded-md mb-4 w-full">
                <NavLink
                  to="/referral-links"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Company Referrals
                </NavLink>
                <NavLink
                  to="/amazon-referrals"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Amazon Referrals
                </NavLink>
              </div>
            )}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-white font-bold mb-4' : 'text-white hover:text-gray-300 mb-4'
              }
              onClick={toggleMobileMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
