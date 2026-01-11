import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 bg-base-100 overflow-hidden"
    >
      {/* Background holographic blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg mb-16"
      >
        Educational Qualification
      </motion.h2>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ rotateY: 8, rotateX: 4, scale: 1.05 }}
        className="group relative card bg-base-200/30 backdrop-blur-xl border border-white/10 shadow-2xl 
                   rounded-2xl p-8 max-w-3xl transition-all duration-300 hover:border-secondary"
      >
        {/* Glow border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/60 transition-all duration-300"></div>

        <div className="flex items-center gap-4 mb-6">
          <FaUniversity className="text-primary text-4xl" />
          <h3 className="text-2xl font-semibold text-secondary group-hover:text-primary transition-colors">
            Uttara University
          </h3>
        </div>

        <div className="space-y-4 text-gray-300 group-hover:text-white transition-colors">
          <p>
            I am currently pursuing my{" "}
            <span className="text-primary font-semibold">
              Bachelor of Science (BSc) in Computer Science & Engineering
            </span>{" "}
            at Uttara University.
          </p>

          <blockquote className="italic text-gray-400 border-l-4 border-primary pl-4">
            "My academic journey in Computer Science has sharpened my analytical thinking and complex problem-solving abilities—skills that I direct every day into building high-performance MERN stack applications."
          </blockquote>

          <p>
            My goal is to bridge the gap between scientific logic and digital innovation, 
            creating impactful web solutions while completing my graduation.
          </p>

          <div className="mt-6 space-y-1">
            <p className="flex items-center gap-2">
              <FaGraduationCap className="text-secondary" />
              <span className="font-medium">Bachelor of Science - BSc</span>
            </p>
            <p className="ml-8 text-gray-300">Computer Science & Engineering</p>
            <p className="ml-8 italic text-gray-400">September 2021 – December 2025</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
