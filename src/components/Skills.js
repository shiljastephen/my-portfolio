import "./Skills.css";
import { FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython />, level: "90%" },
    { name: "Django", icon: <FaDatabase />, level: "85%" },
    { name: "React", icon: <FaReact />, level: "80%" },
    { name: "JavaScript", icon: <FaJs />, level: "85%" },
    { name: "HTML", icon: <FaHtml5 />, level: "95%" },
    { name: "CSS", icon: <FaCss3Alt />, level: "90%" }
  ];

  return (
    <section data-aos="fade-right" className="skills-section">
     <div className="glass-card">
      <h1 className="title">Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>

            {/* Skill Bar */}
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}

export default Skills;
