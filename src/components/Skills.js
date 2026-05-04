import "./Skills.css";
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGit} from "react-icons/fa";
import { SiDjango, SiJavascript, SiAngular, SiBootstrap, SiJquery, SiVercel} from "react-icons/si";
import { SiMysql, SiPostgresql, SiMongodb, SiSqlite, SiPostman} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const skillsData = [
  {
    title: "Backend",
    items: [
      { name: "Python", icon:  <FaPython />, level: "85%" },
      { name: "Django", icon: <SiDjango />, level: "80%" },
      { name: "Node.js", icon: <FaNodeJs />, level: "70%" },
      { name: "REST API", icon: <TbApi />, level: "75%" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, level: "80%" },
      { name: "JavaScript", icon: <SiJavascript />, level: "85%" },
      { name: "Angular", icon: <SiAngular />, level: "70%" },
      { name: "HTML", icon: <FaHtml5 />, level: "85%" },
      { name: "CSS", icon: <FaCss3Alt />, level: "80%" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: "75%" },
      { name: "jQuery", icon: <SiJquery />, level: "65%" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql />, level: "85%" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "70%" },
      { name: "MongoDB", icon: <SiMongodb />, level: "80%" },
      { name: "SQLite", icon: <SiSqlite />, level: "90%" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGit />, level: "85%" },
      { name: "GitHub", icon: <FaGithub />, level: "90%" },
      { name: "Postman", icon: <SiPostman />, level: "80%" },
      { name: "VS Code", icon: <VscCode />, level: "85%" },
      { name: "Vercel", icon: <SiVercel />, level: "75%" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {skillsData.map((category, index) => (
        <div key={index} className="category">
          <h3 className="category-title">{category.title}</h3>

          <div className="skills-grid">
            {category.items.map((skill, i) => (
              <div key={i} className="card">
                <div className="icon">{skill.icon}</div>
                <h4>{skill.name}</h4>

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
      ))}
    </section>
  );
}