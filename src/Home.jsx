import React, { useState } from "react";
import { FaRegStar, FaStar, FaApple, FaGlobe, FaAndroid } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="relative w-full h-[700px] p-[5%]">
        <img
          src="/bannerimg.webp"
          alt="Banner"
          className="w-full h-full object-top object-cover bg-black bg-opacity-50 rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-start items-center text-left text-white pl-[10%]">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              All of the world news, <br /> now all in one place
            </h1>
            <p className="text-xl">One place for news, views and reviews.</p>
            <button
              className="px-6 py-3 bg-red-400 text-white font-bold rounded-3xl my-6"
              onClick={openModal}
            >
              Download
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-red-500"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-center text-red-500 mb-4">
              Get the App
            </h2>
            <h1 className="text-xl text-center">Available only in</h1>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/download-google.png"
                  alt="App Store"
                  className="w-36 h-24 object-contain"
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
                  className="w-36 h-24 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="flex items-center space-x-8 py-5">
        <div className="flex-1">
          <img
            src="/snapui.jpg"
            alt="Informative Image"
            className="w-full h-[500px] object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center text-left px-10">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Stay informed in 60 words.
          </h2>
          <p className="text-lg">
            We understand you don’t have time to go through long news articles
            every day. So we cut the clutter and deliver them, in 60-word
            shorts.
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/download-google.png"
                alt="App Store"
                className="w-36 h-24 object-contain"
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
                className="w-36 h-24 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold text-center mb-4 text-red-500">
        Awards
      </h2>
      <section className="w-full h-30 flex flex-col items-center py-10 bg-gray-100">
        <div className="w-full">
          <img src="" alt="Awards" className="w-full h-16 object-cover" />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center text-center py-10">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          A news stand with top publications
        </h1>
        <p className="text-md font-semibold mb-4">
          Your one-stop solution for breaking news, live TV, newspapers,
          magazines, videos & photos.
        </p>
        <button
          className="px-6 py-3 bg-red-400 text-white font-bold rounded-3xl"
          onClick={openModal}
        >
          Get Now
        </button>
      </div>

      <section className="flex items-center space-x-8 py-10">
        <div className="flex-1 flex flex-col items-end justify-center text-right px-10">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Never miss a thing!
          </h2>
          <p className="text-lg pl-[40%]">
            Breaking News across Politics, Sports, Business, Lifestyle,
            Entertainment & More
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/snapui.jpg"
            alt="Informative Image"
            className="w-full h-[500px] object-contain"
          />
        </div>
      </section>

      <section className="flex items-center space-x-8 py-10">
        <div className="flex-1">
          <img
            src="/snapui.jpg"
            alt="Informative Image"
            className="w-full h-[500px] object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center text-left px-10">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Stay informed in 60 words.
          </h2>
          <p className="text-lg">
            We understand you don’t have time to go through long news articles
            every day. So we cut the clutter and deliver them, in 60-word
            shorts.
          </p>
        </div>
      </section>

      <section className="flex items-center space-x-8 py-10">
        <div className="flex-1 flex flex-col items-end justify-center text-right px-10">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Stay informed in 60 words.
          </h2>
          <p className="text-lg">
            We understand you don’t have time to go through long news articles
            every day. So we cut the clutter and deliver them, in 60-word
            shorts.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/snapui.jpg"
            alt="Informative Image"
            className="w-full h-[500px] object-contain"
          />
        </div>
      </section>

      {/* <h2 className="text-3xl font-bold text-center text-red-500 mb-4">
        As Featured In
      </h2>
      <section className="w-full h-30 flex flex-col items-center py-10 bg-gray-100">
        <div className="w-full">
          <img src="" alt="Awards" className="w-full h-16 object-cover" />
        </div>
      </section> */}

      <h2 className="text-3xl font-bold text-red-500 text-center mb-4">
        Best in the Business
      </h2>

      <section className="w-full h-30 flex flex-col items-center py-10 bg-gray-100">
        <div className="w-full px-10 py-10 bg-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1 flex flex-col items-center text-center px-10">
              <div className="flex items-center">
                <FaStar className="text-yellow-500 text-2xl mb-4" />{" "}
                <FaStar className="text-yellow-500 text-2xl mb-4" />{" "}
                <FaStar className="text-yellow-500 text-2xl mb-4" />{" "}
                <FaStar className="text-yellow-500 text-2xl mb-4" />{" "}
                <FaRegStar className="text-yellow-500 text-2xl mb-4" />{" "}
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-2">
                Loved by users
              </h3>
              <p className="text-lg">
                With a rating of 4.6, we’re the highest-rated news app on the
                Playstore.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center px-10">
              <div className="flex gap-3">
                <FaApple className="text-gray-800 text-4xl mb-4" />{" "}
                <FaAndroid className="text-[#3DDC84] text-4xl mb-4" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-2">
                Loved by app stores
              </h3>
              <p className="text-lg">
                We’ve been in Apple’s Featured Apps showcase and Google’s list
                of the Best Apps of 2015.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center px-10">
              <FaGlobe className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-red-500 mb-2">
                Loved by publishers
              </h3>
              <p className="text-lg">
                Trusted by 1,500+ media houses worldwide. Now you can access
                every major newspaper.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="text-md font-semibold text-center  mt-6">
          Download the easiest way to stay informed
        </h1>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/download-google.png"
              alt="App Store"
              className="w-36 h-24 object-contain"
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
              className="w-36 h-24 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
