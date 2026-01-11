import React from 'react';
import { motion } from "framer-motion";
import SocialLinks from '../common/SocialLinks';

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 bg-base-100 pt-24"
        >
            {/* Left: Text */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Hi, I’m Md.
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                    Full Stack Developer
                </h2>
                <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg">
                    I build modern, responsive web applications with the MERN stack.
                    Passionate about clean UI, smooth animations, and scalable code.
                </p>

                {/* Resume Button */}
                <a
                    href="/Resume_Abdul_Ahad.pdf"
                    download
                    className="btn btn-primary hover:btn-secondary transition-colors"
                >
                    Download Resume
                </a>

                {/* Social Links */}
                <div className="mt-8"> <SocialLinks /> </div>
            </motion.div>

            {/* Right: Photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex justify-center"
            >
                <div className="avatar">
                    <div className="w-48 md:w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-lg">
                        <img
                            src="/portrait.png"
                            alt="Md. Professional Portrait"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;