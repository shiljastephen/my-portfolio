import "./Skills.css";
import { FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <FaDatabase /> },
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> }
  ];

  return (
    <section data-aos="fade-right">
      <h1 className="title">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
