import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
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
        <div className="w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
          <NavLink
            to="/referral-links"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold mx-4' : 'text-white hover:text-gray-300 mx-4'
            }
          >
            Referral Links
          </NavLink>
        </div>
        <div className="w-full sm:w-auto flex justify-center">
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
