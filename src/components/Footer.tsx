import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-300'
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-300'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/referral-links"
            className={({ isActive }) =>
              isActive ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-300'
            }
          >
            Referral Links
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-300'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <p className="text-center text-white mt-4">&copy; 2024 Celestial Code. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
