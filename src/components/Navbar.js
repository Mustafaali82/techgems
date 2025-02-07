import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Persons</Link>
        </li>
        <li>
          <Link to="/quotes">Motivational Quotes</Link>
        </li>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        {/* <li>
          <Link to="/pricing">Pricing</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
