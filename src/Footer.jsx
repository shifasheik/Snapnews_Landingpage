import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-400 py-6 px-[10%]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
          <a href="#contact" className="hover:text-white">
            Contact Us
          </a>
          <a href="#terms" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <img
            src="https://via.placeholder.com/100x40.png?text=inshorts"
            alt="Inshorts Logo"
            className="mb-2"
          />
          <p className="text-sm">&copy; Inshorts Pte Ltd</p>
          <p className="text-sm">© COPYRIGHT 2024</p>
        </div>
       
        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-white text-left mb-3">
            Connect with us
          </h3>
          <div className="grid grid-cols-5 gap-4 mb-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-blue-600 hover:bg-gray-200 transform hover:scale-110 transition"
            >
              <FaFacebookF size={24} />
            </a>
            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-blue-400 hover:bg-gray-200 transform hover:scale-110 transition"
            >
              <FaTwitter size={24} />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-pink-500 hover:bg-gray-200 transform hover:scale-110 transition"
            >
              <FaInstagram size={24} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-blue-700 hover:bg-gray-200 transform hover:scale-110 transition"
            >
              <FaLinkedinIn size={24} />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-red-600 hover:bg-gray-200 transform hover:scale-110 transition"
            >
              <FaYoutube size={24} />
            </a>
          </div>
          {/* Download Button */}
          <h1 className="text-white py-2 px-4">Download App</h1>
          <div className="flex justify-center gap-4 ">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/download-google.png"
                alt="App Store"
                className="w-24 h-24 object-contain"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/download-apple.png"
                alt="Google Play"
                className="w-24 h-24 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
