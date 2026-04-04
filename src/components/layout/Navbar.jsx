import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaAccusoft } from "react-icons/fa6";
import Logo from "../../../public/Logo";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Education", path: "#education" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark_tech" ? "light_tech" : "dark_tech");
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        {/* <FaAccusoft size={24} className="drop-shadow-[0_0_8px_rgba(0,216,255,0.8)]" /> */}
        <a
          href="#home"
          className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          abd-005
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="text-base font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors"
          >
            {theme === "dark_tech" ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-secondary text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-primary transition-colors"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-base-200/90 backdrop-blur-xl shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* Theme Toggle in Mobile */}
          <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors"
          >
            {theme === "dark_tech" ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-secondary text-xl" />
            )}
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
