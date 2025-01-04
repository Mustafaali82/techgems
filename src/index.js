import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from ReactDOM
import App from "./App";
import "aos/dist/aos.css";
import AOS from "aos";
import "./styles/global.css"

// Initialize AOS
AOS.init();

// Use ReactDOM.createRoot for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
