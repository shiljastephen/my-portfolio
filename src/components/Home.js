import { useNavigate } from "react-router-dom";
import "./Home.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" data-aos="fade-up">
      <h1>Hi, I'm Shilja 👋</h1>
      <h2>Full-Stack Developer (Django & React)</h2>
      <p>I create modern, scalable web applications using Django and React, 
        focused on performance, clean architecture, and seamless user experience.</p>

      <button onClick={() => navigate("/projects")}>
        View Projects
      </button>
    </section>
  );
}

export default Hero;
