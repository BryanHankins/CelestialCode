import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-emerald p-4">
      <ul className="flex justify-around">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-300'
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
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-300'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/referral-links"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-300'
            }
          >
            Referral Links
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-300'
            }
          >
            Contact
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
