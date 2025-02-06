import { useState, useEffect, useContext } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail, FiCode, FiMoon, FiSun } from 'react-icons/fi';
import styles from './Navbar.module.css';
import { ThemeContext } from '../../contexts/theme';

const Navbar = ({ Name = "Your-Name" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const { themeName, toggleTheme } = useContext(ThemeContext);

  const links = [
    { id: 'home', label: 'Home', icon: <FiHome /> },
    { id: 'about', label: 'About', icon: <FiUser /> },
    { id: 'skills', label: 'Skills', icon: <FiCode /> },
    { id: 'projects', label: 'Projects', icon: <FiFolder /> },
    { id: 'contact', label: 'Contact', icon: <FiMail /> },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`${styles.navbar} ${themeName === 'dark' ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>{Name}</div>

        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeLink === link.id ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.id);
                  handleScroll(link.id);
                }}
              >
                <span className={styles.icon}>{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={styles.themeButton} onClick={handleThemeToggle}>
          {themeName === 'dark' ? <FiSun /> : <FiMoon />}
        </button>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeLink === link.id ? styles.active : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.id);
                    handleScroll(link.id);
                    setIsOpen(false);
                  }}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
