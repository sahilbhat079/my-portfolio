import { React, useContext } from "react";
import styles from "./Skills.module.css";
import { ThemeContext } from "../../contexts/theme";

// Importing icons for relevant skills
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt, FaReact, FaNodeJs, FaDatabase, FaPhp, FaCogs, FaPython } from "react-icons/fa";
import { SiGraphql, SiTypescript } from "react-icons/si";

// Skill Icon Mapping
const getIcon = (skillName) => {
  switch (skillName) {
    case "HTML":
      return <FaHtml5 />;
    case "CSS":
      return <FaCss3Alt />;
    case "JavaScript":
      return <FaJsSquare />;
    case "Bootstrap":
      return <FaBootstrap />;
    case "Git":
      return <FaGitAlt />;
    case "React":
      return <FaReact />;
    case "TypeScript":
      return <SiTypescript />;
    case "GraphQL":
      return <SiGraphql />;
    case "React Native":
      return <FaReact />;
    case "Node.js":
      return <FaNodeJs />;
    case "Express.js":
      return <FaCogs />;
    case "MongoDB":
      return <FaDatabase />;
    case "SQL":
      return <FaDatabase />;
    case "MySQL":
      return <FaDatabase />;
    case "Firebase":
      return <FaDatabase />;
    case "PHP":
      return <FaPhp />;
    case "C":
    case "C++":
    case "Java":
      return <FaCogs />;
    case "Python":
      return <FaPython />;
    default:
      return null;
  }
};

const Skills = ({ skillsData }) => {
  const { themeName } = useContext(ThemeContext);

  return (
    <section id="skills" className={`${styles.skillsSection} ${themeName === 'dark' ? styles.dark : ''}`}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.subtitle}>My technical level</p>

      <div className={styles.skillsContainer}>
        {skillsData.map((category, index) => (
          <div key={index} className={styles.card}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx} className={styles.skillItem}>
                  <span className={styles.icon}>{getIcon(skill.name)}</span>
                  <strong>{skill.name}</strong> <span>{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
