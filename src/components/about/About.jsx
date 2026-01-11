import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 bg-base-100"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary mb-12"
      >
        About Me
      </motion.h2>

      {/* Content Grid */}
      <div className="max-w-5xl grid md:grid-cols-2 gap-8">
        {[
          {
            title: "My Journey",
            icon: <FaLaptopCode className="mr-2 text-primary" />,
            content:
              "I’m a passionate and dedicated Computer Science & Engineering student at Uttara University and a MERN Stack Full Stack Developer, focused on building modern, scalable, and efficient web applications.",
          },
          {
            title: "Technical Expertise",
            icon: <FaCode className="mr-2 text-primary" />,
            content: (
              <ul className="list-disc list-inside space-y-1">
                <li>Frontend: JavaScript (ES6+), React.js, HTML5, CSS3, Tailwind CSS</li>
                <li>Backend: Node.js, Express.js, REST APIs</li>
                <li>Database: MongoDB</li>
                <li>Languages: C, C++, Java, Python</li>
                <li>Exploring: Next.js, AI & Machine Learning fundamentals</li>
              </ul>
            ),
          },
          {
            title: "What I Do",
            icon: <FaRocket className="mr-2 text-primary" />,
            content: (
              <ul className="list-disc list-inside space-y-1">
                <li>Build full-stack web applications using the MERN stack</li>
                <li>Write clean, maintainable, and scalable code</li>
                <li>Learn by building real-world projects and collaborating</li>
                <li>Stay updated with modern web development trends</li>
              </ul>
            ),
          },
          {
            title: "Goals & Opportunities",
            icon: <FaEnvelope className="mr-2 text-primary" />,
            content: (
              <>
                <p className="mb-4">
                  I’m open to internships, entry-level roles, collaborations, and learning opportunities where I can grow as a developer and contribute to meaningful, impactful projects.
                </p>
                <p>
                  <span className="font-semibold text-primary">Email:</span> abd.me7@gmail.com
                </p>
              </>
            ),
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group card bg-base-200/40 backdrop-blur-xl shadow-xl border border-white/10 p-6 
                       transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-secondary"
          >
            <h3 className="flex items-center text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">
              {card.icon} {card.title}
            </h3>
            <div className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
              {card.content}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
