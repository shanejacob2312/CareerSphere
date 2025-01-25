import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>   {/* Link to Home page */}
        <li><Link to="/about">About</Link></li> {/* Link to About page */}
        <li><Link to="/login">Login</Link></li> {/* Link to Login page */}
        <li><Link to="/signup">Signup</Link></li> {/* Link to Signup page */}
      </ul>
    </nav>
  );
}

export default Navbar;
