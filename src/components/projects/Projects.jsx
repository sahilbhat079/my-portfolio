import React, { useContext } from "react";
import styles from "./Projects.module.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { ThemeContext } from "../../contexts/theme"; // Import theme context

import QuizAppImage from "/assets/Quiz_app.png";
import chatapp from "/assets/ChatApp.png";
import foodoredring from "/assets/foodordering.png";
import stopclock from "/assets/StopClock.png";
import tictactoe from "/assets/Tictactoe.png";
import placepicker from "/assets/Placepicker.png";

const projects = [
  {
    id: 1,
    title: "Food Ordering App",
    image: foodoredring,
    liveLink: "",
    githubLink: "https://github.com/sahilbhat079/https---github.com-sahilbhat079-icsc-food",
  },
  {
    id: 2,
    title: "Chat Application",
    image: chatapp,
    liveLink: "https://chat-appg-sg.onrender.com",
    githubLink: "https://github.com/sahilbhat079/mern-chat-app",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    image: tictactoe,
    liveLink: "https://tic-tac-toees.netlify.app/",
    githubLink: "",
  },
  {
    id: 4,
    title: "Quiz App",
    image: QuizAppImage,
    liveLink: "https://rc-quizz.netlify.app/",
    githubLink: "https://github.com/your-repo",
  },
  {
    id: 5,
    title: "Place Picker App",
    image: placepicker,
    liveLink: "https://placepickerfrontend.vercel.app/",
    githubLink: "",
  },
  {
    id: 6,
    title: "Stop The Clock",
    image: stopclock,
    liveLink: "https://stopthe-clock.netlify.app/",
    githubLink: "",
  },
];

const Projects = () => {
  const { themeName } = useContext(ThemeContext); // Get theme name

  return (
    <section id="projects" className={`${styles.projectsSection} ${themeName === "dark" ? styles.darkMode : ""}`}>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>My recent work</p>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={`${styles.card} ${themeName === "dark" ? styles.darkCard : ""}`}>
            <img src={project.image} alt={project.title} className={styles.thumbnail} />
            <h3>{project.title}</h3>
            <div className={styles.links}>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.liveBtn} ${themeName === "dark" ? styles.darkLink : ""}`}
                >
                  <FaLink /> Live Preview
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.githubBtn} ${themeName === "dark" ? styles.darkLink : ""}`}
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
