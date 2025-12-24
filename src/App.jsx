import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Careers from "./components/pages/Careers";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {}
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;