import React, { useContext, Suspense, lazy } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/theme.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import ContactMe from "./components/contactme/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

import homeprofile from '/assets/HomeProfile2.jpeg'

// Social Media Links
const socialmedialinks = {
  instagramLink: "https://www.instagram.com/sahil_bhat_079/",
  githubLink: "https://github.com/sahilbhat079",
  linkedinLink: "https://www.linkedin.com/in/sahil-gani-2b963121a/",
};

const skillsData = [
  {
    title: "Frontend Developer",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "Git", level: "Intermediate" },
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Beginner" },
      { name: "React Native", level: "Beginner" },
    ],
  },
  {
    title: "Backend Developer",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "GraphQL", level: "Beginner" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "PHP", level: "Beginner" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Beginner" },
    ],
  },
];

const title = "Sahil Gani";
const description =
  "A passionate full-stack developer skilled in front-end and back-end technologies, including React, Node.js, Express.js, and MongoDB. With experience in building responsive, user-friendly web applications such as e-commerce platforms and chat apps, I am constantly expanding my skills. Currently diving into React Native, GraphQL, and TypeScript to build efficient, scalable web and mobile applications. Driven by a love for creating beautiful, high-performance solutions that make an impact.";

function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    <>
      
        <Navbar Name="Sahil Gani" />
        
        {/* Use Suspense to lazy load the image */}
        <Suspense fallback={<div>Loading...</div>}>
          <Home
            socialmedialinks={{ ...socialmedialinks, profileImage: homeprofile }}
            title={title}
            description={description}
          />
        </Suspense>

        <About />
        <Skills skillsData={skillsData} />
        <Projects />
        <ContactMe />
        <Footer
          instagramLink="https://www.instagram.com/sahil_bhat_079/"
          githubLink="https://github.com/sahilbhat079"
          linkedinLink="https://www.linkedin.com/in/sahilgani"
          email="sahilgani.sahilgani@gmail.com"
        />

    </>
  );
}

export default App;
