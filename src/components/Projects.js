import eventImg from "../images/event.png";
import ecommerce1Img from "../images/ecommerce1.png";
import "./Projects.css";

function Projects() {
  return (
    <section className="glass-card">
     
      <div className="project-grid">
      
        <h1 className="title">Projects</h1>
        {/* Project 1 */}
        <div className="glass-card project-card" data-aos="zoom-out">
          <img src={eventImg} alt="Event Management System" />
          <h3>Event Management System</h3>
          <p>
            Django-based platform for managing school/organization events
            with role-based access.
          </p>
          <a
            href="https://github.com/shiljastephen/PythonProject6New.git"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>

        {/* Project 2 */}
        <div className="glass-card project-card" data-aos="zoom-out">
          <img src={ecommerce1Img} alt="E-commerce App" />
          <h3>E-Commerce Web App</h3>
          <p>
            Full-stack shopping application with cart, product management,
            and order placement.
          </p>
          <a
            href="https://github.com/shiljastephen/ocean-ecommerce-app.git"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
