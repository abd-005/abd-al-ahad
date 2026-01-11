import React from "react";
import { motion } from "framer-motion";

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

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl grid md:grid-cols-2 gap-8"
      >
        {/* Journey */}
        <div className="card bg-base-200/40 backdrop-blur-xl shadow-xl border border-white/10 p-6">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            My Journey
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I started my programming journey exploring web technologies and
            quickly fell in love with building interactive applications. Over
            time, I mastered the MERN stack and now specialize in creating
            scalable, responsive solutions.
          </p>
        </div>

        {/* Interests */}
        <div className="card bg-base-200/40 backdrop-blur-xl shadow-xl border border-white/10 p-6">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Beyond Coding
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Outside of programming, I enjoy sports, creative design, and
            exploring new technologies. These hobbies fuel my creativity and
            help me bring fresh perspectives into my work.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
