import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white py-4 px-[5%] shadow-md flex justify-between items-center fixed top-0 w-full z-50">
      {/* Left side: Image */}
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="h-12 w-12 object-cover"
          />
        </NavLink>
      </div>

      {/* Right side: Blog link and button */}
      <div className="flex items-center space-x-4">
        <NavLink
          to="/readnow"
          className={({ isActive }) =>
            `text-lg font-medium transition duration-200 cursor-pointer ${isActive ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-800'}`
          }
        >
          Read Now
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-lg font-medium transition duration-200 cursor-pointer ${isActive ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-800'}`
          }
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
