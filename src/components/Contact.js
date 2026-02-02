import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" data-aos="fade-left">
      <h1>Contact Me</h1>

      <p><FaEnvelope /> shiljastephen@gmail.com</p>

      <div className="contact-links">
        <a href="https://github.com/shiljastephen" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>

        <a href="https://linkedin.com/in/shiljastephen" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
