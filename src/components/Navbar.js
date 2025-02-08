import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <div className="menu-list">
          <li>
            <Link to="/">Persons</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
          {/* <li>
          <Link to="/pricing">Pricing</Link>
        </li> */}
        </div>
        <div className="theme-icon">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
