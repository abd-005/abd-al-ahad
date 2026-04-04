import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import { CursorifyProvider } from '@cursorify/react'
import About from "./components/About/About.jsx";
import Footer from "./components/layout/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import TechCursor from "./components/UI/TechCursor.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark_tech");

  // Optional: respect system preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark_tech" : "light_tech");
  }, []);

  return (
    <div data-theme={theme}>
      <TechCursor />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="pt-16">
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
