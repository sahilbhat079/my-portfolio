import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Home.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

const Home = ({ title, description, socialmedialinks }) => {
  const { instagramLink, githubLink, linkedinLink, profileImage } = socialmedialinks;
  const { themeName } = useContext(ThemeContext);


  return (
    <section id="home" className={`${styles.homeSection} ${themeName === "dark" ? "dark" : ""}`}>
    <div className={styles.content}>
      <div className={styles.textContent}>
        <h1 className={styles.name}>{title}</h1>
        <h2 className={styles.role}>Full Stack Developer</h2> {/* Added Full Stack Developer */}
        <p className={styles.description}>{description}</p>
        <div className={styles.socialLinks}>
          {instagramLink && (
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaInstagram />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaGithub />
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.profileImage} src={profileImage} alt="Profile" />
      </div>
    </div>
  </section>
  
  );
};

export default Home;
