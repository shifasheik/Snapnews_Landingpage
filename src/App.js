import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./Home";
import Footer from "./Footer";
import Blog from "./Blog";
import Readnow from "./Readnow";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="mt-[5%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/readnow" element={<Readnow />} />

        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
