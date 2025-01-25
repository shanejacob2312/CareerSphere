// src/App.js
import React from "react";
import Navbar from "./components/navbar";  // Import the Navbar component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage"; // Import Home page
import AboutPage from "./pages/aboutpage"; // Import About page
import LoginPage from "./pages/login";  // Import Login page
import SignupPage from "./pages/signup";  // Import Signup page

function App() {
  return (
    <Router>
      <Navbar />  {/* Render the Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />   {/* Home route */}
        <Route path="/about" element={<AboutPage />} />  {/* About route */}
        <Route path="/login" element={<LoginPage />} />  {/* Login route */}
        <Route path="/signup" element={<SignupPage />} />  {/* Signup route */}
      </Routes>
    </Router>
  );
}

export default App;
