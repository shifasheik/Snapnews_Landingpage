import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="bg-white py-4 px-[5%] shadow-md flex justify-between items-center ">
      {/* Left side: Image */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Logo"
          className="h-12 w-12 object-cover"
        />
      </div>

      {/* Right side: Blog link and button */}
      <div className="flex items-center space-x-4">
        <Link
          to="/readnow" 
          className="text-lg font-medium text-gray-800 hover:text-primaryColor transition duration-200 cursor-pointer"
        >
          Read Now
        </Link>
        <Link
          to="/blog" 
          className="text-lg font-medium text-gray-800 hover:text-primaryColor transition duration-200 cursor-pointer"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
