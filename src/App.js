import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Establishments from "./Pages/Establishments/Establishments";
import Establishment from "./Pages/Establishment/Establishment";
import Register from "./Pages/Register/Register";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Donations from "./Pages/Donations/Donations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/establishments" element={<Establishments />} />
          <Route exact path="/establishment/:id" element={<Establishment />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/donations" element={<Donations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="header">
        <Navbar />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
