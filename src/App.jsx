import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {
  return (
    <div data-theme="mytheme">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Home/>
        <About/>
        <section id="skills" className="min-h-[60vh] text-white">Skills</section>
        <section id="projects" className="min-h-[60vh] text-white">Projects</section>
        <section id="contact" className="min-h-[60vh] text-white">Contact</section>
      </main>
      <Footer/>
    </div>
  );
}
