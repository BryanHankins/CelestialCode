import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-emerald p-4">
      <div className="flex flex-wrap justify-center">
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
    </nav>
  );
};

export default Navbar;
