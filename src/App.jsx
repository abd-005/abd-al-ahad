import React from "react";
import Navbar from "./components/layout/Navbar.jsx";

export default function App() {
  return (
    <div data-theme="mytheme">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <section id="home" className="min-h-[60vh] text-white pt-24">Home</section>
        <section id="about" className="min-h-[60vh] text-white">About</section>
        <section id="skills" className="min-h-[60vh] text-white">Skills</section>
        <section id="projects" className="min-h-[60vh] text-white">Projects</section>
        <section id="contact" className="min-h-[60vh] text-white">Contact</section>
      </main>
    </div>
  );
}
