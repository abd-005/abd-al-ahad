import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/layout/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";

export default function App() {
  return (
    <div data-theme="mytheme">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
