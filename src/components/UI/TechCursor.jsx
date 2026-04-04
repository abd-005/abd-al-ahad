import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { FaCode } from "react-icons/fa"; // You can use FaTerminal, FaAtom, etc.
import { TbPointerCode } from "react-icons/tb";
import { FaAccusoft, FaAtom, FaTerminal } from "react-icons/fa6";

const TechCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Spring configuration for smooth "lagging" effect
  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the icon (half of size)
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e) => {
      // Check if the element being hovered is a button or link
      if (e.target.closest("a, button, .cursor-pointer")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center text-primary"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 1.5 : 1,
      }}
    >
      {/* The Tech Icon */}
      <TbPointerCode size={24} className="drop-shadow-[0_0_8px_rgba(0,216,255,0.8)]" />
      
      {/* Optional Outer Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute w-10 h-10 border bg-gray-400/10 border-primary/30 rounded-full"
      />
    </motion.div>
  );
};

export default TechCursor;