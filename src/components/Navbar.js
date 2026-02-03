import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome, FaCode, FaUser, FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <nav className="nav">
      <h2 className="logo">Shilja S</h2>

      <div className="links">
        <Link to="/"><FaHome /> Home</Link> 
        <Link to="/skills"><FaCode /> Skills</Link>
        <Link to="/projects"><FaUser /> Projects</Link>
        <Link to="/contact"><FaEnvelope /> Contact</Link>
      </div>

      <div className="socials">
        <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        {/* 🌙 Dark Mode Button */}
        <button className="dark-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
