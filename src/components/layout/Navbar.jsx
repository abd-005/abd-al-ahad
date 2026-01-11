import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-md">
      {/* Brand */}
      <div className="flex-1">
        <a
          href="#home"
          className="btn btn-ghost hover:border-none hover:outline-none normal-case text-xl text-primary font-bold"
        >
          abd.dev
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="btn btn-ghost text-white hover:text-secondary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {/* Hamburger / Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-base-200 shadow-lg flex flex-col items-center gap-2 py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="btn btn-ghost w-3/4 text-white hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
