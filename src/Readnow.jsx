import React from "react";

const Readnow = () => {
  return (
    <div className="bg-gray-100 py-[10%] px-[15%]">
      {/* Top Banner */}
      <div className="bg-red-500 text-white text-center py-2 flex justify-between items-center rounded-lg px-[3%]">
        <div className="text-left text-lg">
          For the best experience use inshorts app on your smartphone
        </div>
        <div className="flex justify-end gap-4 ">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/download-google.png"
              alt="App Store"
              className="w-36 h-10 object-contain"
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
              className="w-36 h-10 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex bg-white rounded shadow-lg mt-6">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src="/path-to-image.jpg"
            alt="Cricket"
            className="w-full h-full object-cover rounded-l"
          />
        </div>

        {/* Text Section */}
        <div className="w-2/3 p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Why was Yashasvi Jaiswal given out despite no edge on Snicko?
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            <span className="font-medium">short by Anmol Sharma</span> / 12:01
            pm on Monday 30 December, 2024
          </p>
          <p className="text-gray-700 text-sm mt-4">
            Team India opener Yashasvi Jaiswal’s dismissal during the fifth day
            of the Boxing Day Test in Melbourne sparked a controversy. Jaiswal
            was given out despite no edge being registered on the Snicko. The
            third umpire ruled that there was a clear deflection as replays
            seemed to show the ball changing its trajectory. The on-field umpire
            had declared Jaiswal not out.
          </p>
          <a href="#" className="text-blue-500 text-sm mt-4 block">
            read more at CricTracker
          </a>
        </div>
      </div>
    </div>
  );
};

export default Readnow;
