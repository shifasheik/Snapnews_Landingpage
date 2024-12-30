import React, { useState } from "react";
import { FaShareAlt, FaRegSave, FaForward } from "react-icons/fa";

const Blog = () => {
  const keyPoints = [
    "India is projected to be the fastest-growing large economy, with a 7% growth rate for the current fiscal year.",
    "Climate change poses significant risks, potentially reducing India's GDP by up to 25% by 2070.",
    "The country faces challenges such as slow structural reforms, trade barriers, and high youth unemployment.",
  ];

  const [shares, setShares] = useState(0);
  const [saves, setSaves] = useState(0);
  const [forwards, setForwards] = useState(0);

  const handleShare = () => setShares(shares + 1);
  const handleSave = () => setSaves(saves + 1);
  const handleForward = () => setForwards(forwards + 1);

  return (
    <div className="py-5 mt-[10%] mb-[5%] bg-white border rounded-lg max-w-3xl mx-auto">
      {/* Main Blog Container */}
      <div className="space-y-4 px-5">
        {/* Title and Subtitles */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-800">
            India's Economic Growth and Climate Challenges
          </h1>
          <h2 className="text-xl font-medium text-gray-600">
            Climate Change Impact on India's Economy
          </h2>
          <h2 className="text-xl font-medium text-gray-600">
            Projected GDP Growth Amid Environmental Concerns
          </h2>
        </div>

        {/* Image */}
        <div className="w-full h-96 bg-gray-200 flex justify-center items-center">
          <img
            src=""
            alt="Blog Image"
            className="w-600px h-400px object-cover"
          />
        </div>

        {/* Key Points */}
        <ul className="list-disc pl-6 space-y-2">
          {keyPoints.map((point, index) => (
            <li key={index} className="text-gray-700">
              {point}
            </li>
          ))}
        </ul>

        {/* Actions: Share, Save, Forward */}
        <div className="flex space-x-4 items-center">
          <button
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            onClick={handleShare}
          >
            <FaShareAlt size={20} />
          </button>
          <span className="text-gray-700">{shares} Shares</span>

          <button
            className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-300"
            onClick={handleSave}
          >
            <FaRegSave size={20} />
          </button>
          <span className="text-gray-700">{saves} Saves</span>

          <button
            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
            onClick={handleForward}
          >
            <FaForward size={20} />
          </button>
          <span className="text-gray-700">{forwards} Forwards</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
