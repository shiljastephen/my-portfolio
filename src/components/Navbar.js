import { Link } from "react-router-dom";
import { FaHome, FaCode, FaUser, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
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
      </div>
    </nav>
  );
}

export default Navbar;
