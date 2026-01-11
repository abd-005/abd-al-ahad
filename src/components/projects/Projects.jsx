import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projectsData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 bg-base-100 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-primary mb-16 text-center md:text-left"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group bg-base-200/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-secondary mb-2">
                {project.name}
              </h3>

              <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                <Link
                  to={`/projects/${project.id}`}
                  className="btn btn-primary btn-block hover:btn-secondary transition-all transform active:scale-95 w-6/12"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
