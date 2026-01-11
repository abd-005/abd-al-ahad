import React from "react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/abd-005",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ab0ahad",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM14.5 9c-2.33 0-3.5 1.28-4 2.18V9H7v12h3.5v-6.5c0-1.73.9-2.5 2.1-2.5 1.2 0 1.9.77 1.9 2.5V21H18V14.5C18 11.5 16.33 9 14.5 9z" />
      </svg>
    ),
  },
  {
  name: "X",
  href: "https://x.com/ab0ahad",
  icon: (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.21 2H21L14.38 9.54 22 22h-5.21l-4.24-6.9L7.6 22H4.8l6.1-7.16L3 2h5.28l3.84 6.23L18.21 2z" />
    </svg>
  ),
},
  {
    name: "Facebook",
    href: "https://facebook.com/ab0ahad",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
      </svg>
    ),
  },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <motion.a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-ghost text-white border border-white/10 hover:border-secondary hover:text-secondary transition-colors"
        >
          <span className="text-primary">{s.icon}</span>
          <span className="ml-2">{s.name}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
