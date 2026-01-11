import React from "react";
import { motion } from "framer-motion";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import {
    SiJavascript,
    SiPython,
    SiC,
    SiCplusplus,
    SiReact,
    SiReactrouter,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiJsonwebtokens,
    SiPostman,
    SiMongodb,
    SiMysql,
    SiXampp,
    SiFirebase,
    SiNetlify,
    SiGit,
    SiGithub,
    SiAdobephotoshop,
    SiFigma,
} from "react-icons/si";

const skillsData = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "Python", icon: <SiPython className="text-blue-400" /> },
            { name: "C", icon: <SiC className="text-blue-600" /> },
            { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },],
    },
    {
        category: "Frontend",
        items: [
            { name: "React", icon: <SiReact className="text-cyan-400" /> },
            { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-white" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        ],
    },
    {
        category: "Databases",
        items: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
            { name: "XAMPP", icon: <SiXampp className="text-orange-400" /> },
        ],
    },
    {
        category: "Platforms / Hosting",
        items: [
            { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
            { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
        ],
    },
    {
        category: "Version Control",
        items: [
            { name: "Git", icon: <SiGit className="text-red-500" /> },
            { name: "GitHub", icon: <SiGithub className="text-white" /> },
        ],
    },
    {
        category: "Editor", items: [{ name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400" /> },
        ],
    },
    {
        category: "Design",
        items: [
            { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
            { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
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
                Skills
            </motion.h2>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl perspective-[1000px]">
                {skillsData.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.07 }}
                        whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                        className="group relative card bg-base-200/30 backdrop-blur-xl border border-white/10 shadow-2xl 
                       rounded-2xl p-6 transition-all duration-300 hover:border-secondary"
                    >
                        <h3 className="text-2xl font-semibold text-secondary mb-6 group-hover:text-primary transition-colors">
                            {skill.category}
                        </h3>
                        <ul className="flex flex-wrap gap-4">
                            {skill.items.map((item, j) => (
                                <li
                                    key={j}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-gray-200 text-sm font-medium shadow-inner 
                             transition-transform duration-300 group-hover:scale-110"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
