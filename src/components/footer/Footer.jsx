import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import styles from './Footer.module.css';

const Footer = ({ 
  instagramLink = '', 
  githubLink = '', 
  linkedinLink = '', 
  email = 'sahilgani.sahilgani@gmail.com' 
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyRight}>
          &copy; {new Date().getFullYear()} Sahil Gani. All Rights Reserved.
        </p>
        
        {/* Conditional Rendering for Social Links */}
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

        {/* Contact Info */}
        <div className={styles.contact}>
          <p>Contact me: <a href={`mailto:${email}`}>{email}</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
