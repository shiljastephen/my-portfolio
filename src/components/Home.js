import { useNavigate } from "react-router-dom";
import "./Home.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" data-aos="fade-up">
      <h1>Hi, I'm Shilja</h1>
      <h2>Python & React Developer</h2>
      <p>I build modern web applications using Django & React.</p>

      <button onClick={() => navigate("/projects")}>
        View Projects
      </button>
    </section>
  );
}

export default Hero;
