import React, { useContext } from "react";
import styles from "./About.module.css";
import { FaDownload } from "react-icons/fa";
import aboutmeimage from '/assets/aboutme.jpeg';
import cvfile from "/assets/Cv.pdf";
import { ThemeContext } from "../../contexts/theme";

const About = ({
    profileImg = aboutmeimage,
    experience = "1+ Years",
    completedProjects = "20+ Projects",
    description = "Full-stack developer with a strong focus on backend technologies. I build robust web applications using Node.js, Express.js, and MongoDB, while also ensuring seamless UI/UX design for an intuitive user experience. With years of experience, I’ve successfully delivered many projects that have made clients happy",
    cvDownloadLink = cvfile,
}) => {
    const { themeName } = useContext(ThemeContext);

    return (
        <section id="about" className={`${styles.aboutMe} ${themeName === 'dark' ? styles.dark : ''}`}>
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
                    <a href={cvDownloadLink} download="cv.pdf" className={styles.downloadBtn}>
                        Download CV <FaDownload />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;