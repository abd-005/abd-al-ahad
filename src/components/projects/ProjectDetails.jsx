import React from "react";
import { motion } from "framer-motion";
import projects from "../../../public/data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => String(p.id) === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
                <h2 className="text-2xl font-bold">Project not found</h2>
                <Link to="/" className="btn btn-primary mt-4">Back to Home</Link>
            </div>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 md:px-16 py-24 bg-base-100 min-h-screen"
        >
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 transition-all">
                    <FaArrowLeft /> Back to Home
                </Link>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-2xl shadow-2xl border border-white/10 w-full aspect-video object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="text-4xl font-extrabold text-primary">{project.name}</h1>

                        <p className="text-lg text-base-content/80 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, index) => (
                                <span key={index} className="badge badge-outline badge-secondary py-3 px-4">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-4 border-t border-white/5 pt-4">
                            <div>
                                <h3 className="font-bold text-secondary text-lg">The Challenge</h3>
                                <p className="text-base-content/70 mt-1">{project.challenges}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary text-lg">Future Improvements</h3>
                                <p className="text-base-content/70 mt-1">{project.improvements}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary flex-1 gap-2">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-primary flex-1 gap-2">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectDetails;