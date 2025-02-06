import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName,setThemeName] = useState('light');

  useEffect(() => {
    // Retrieve the theme from localStorage (if available) or set based on system preference
    const savedTheme = localStorage.getItem('themeName');
    if (savedTheme) {
      setThemeName(savedTheme);
    } else {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    }

    // Event listener for changes in system theme
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    };
    darkMediaQuery.addEventListener('change', handleChange);

    // Cleanup the event listener on component unmount
    return () => {
      darkMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', newTheme); // Store the new theme in localStorage
    setThemeName(newTheme); // Update the theme state
  };

  return (
    <ThemeContext.Provider value={{themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
