import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Home";
import Story from "./components/Story";
import Quotes from "./components/Quotes";
// import Pricing from './components/Pricing'; 
import personalities from "./data/personalities";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <Router>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Newsletter />} />
        <Route
          path="/story/:id"
          element={<Story personalities={personalities} />}
        />
        <Route path="/quotes" element={<Quotes />} />{" "}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
