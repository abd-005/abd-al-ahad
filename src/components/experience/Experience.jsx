import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    company: "CEMS-Global",
    role: "Volunteer",
    date: "June 2022 - June 2022 (1 month)",
    location: "Dhaka, Bangladesh",
    description:
      "It was the 15th Dhaka Motor Show 2022. A complete show for the brand new Automobile Sector of Bangladesh. I was a volunteer there.",
  },
  {
    company: "Bangladesh Bureau of Statistics (BBS)",
    role: "Enumerator",
    date: "June 2022 - June 2022 (1 month)",
    location: "Uttara Thana, Dhaka, Bangladesh",
    description:
      'I did a job at "Population and House Census 2022". Which was organized by the Bangladesh Bureau of Statistics. Here, I was an enumerator.',
  },
  {
    company: "Unilive Health Care",
    role: "Pharmacist",
    date: "October 2020 - February 2021 (5 months)",
    location: "Gazipur District, Dhaka, Bangladesh",
    description:
      "Worked as a pharmacist, ensuring proper distribution and guidance for healthcare products.",
  },
  {
    company: "Alif Attar Company",
    role: "Sales Executive",
    date: "July 2020 - September 2020 (3 months)",
    location: "Dhaka, Bangladesh",
    description:
      "It was a contractual job. I sold the product of this company.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
        Experience
      </motion.h2>

      {/* Timeline Grid */}
      <div className="max-w-5xl space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ rotateY: 8, rotateX: 4, scale: 1.05 }}
            className="group relative card bg-base-200/30 backdrop-blur-xl border border-white/10 shadow-2xl 
                       rounded-2xl p-8 transition-all duration-300 hover:border-secondary"
          >
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/60 transition-all duration-300"></div>

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-secondary group-hover:text-primary transition-colors">
                {exp.company}
              </h3>
              <span className="text-sm text-gray-400 italic">{exp.role}</span>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-gray-400 mb-4">
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" /> {exp.date}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary" /> {exp.location}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
