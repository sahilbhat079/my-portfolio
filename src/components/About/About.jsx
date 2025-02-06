import React from "react";
import styles from "./About.module.css";
// import profileImg from "../../assets/profile.jpg"; // Replace with your image
import { FaDownload } from "react-icons/fa";
import aboutmeimage from '/assets/aboutme.jpeg'

const About = (
  {
    profileImg = aboutmeimage, // Default profile image
    experience = "1+ Years", // Default experience
    completedProjects = "20+ Projects", // Default completed projects count
    description = "Full-stack developer with a strong focus on backend technologies. I build robust web applications using Node.js, Express.js, and MongoDB, while also ensuring seamless UI/UX design for an intuitive user experience. With years of experience, I’ve successfully delivered many projects that have made clients happy",
    cvDownloadLink = '/assets/cv.pdf', // Default CV link
  }
) => {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <img
            src={profileImg}
            alt="Profile"
            className={styles.profileImg}
          />
        </div>
        <div className={styles.content}>
          <h2>About Me</h2>
          <p className={styles.subtitle}>My Introduction</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>Experience</span>
              <p>{experience}</p>
            </div>
            <div className={styles.stat}>
              <span>Completed</span>
              <p>{completedProjects}</p>
            </div>
            <div className={styles.stat}>
              <span>Support</span>
              <p>Online 24/7</p>
            </div>
          </div>
          <p className={styles.description}>
           {description}
          </p>
          <a href={cvDownloadLink} 
            download="cv.pdf" 
          className={styles.downloadBtn}>
            Download CV <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
