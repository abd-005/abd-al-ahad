import { motion } from "framer-motion";
import { Link } from "react-router";

const TechButton = ({ 
  text, 
  onClick, 
  to, 
  href, 
  download, 
  icon: Icon, 
  variant = "primary", // "primary" or "secondary"
  className = "" 
}) => {
  
  // Base styles for both variants
  const baseStyles = `relative group px-8 py-3 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 font-bold tracking-wide ${className}`;

  // Style logic based on variant
  const variants = {
    primary: {
      bg: "bg-gradient-to-r from-primary via-secondary to-primary animate-border-flow opacity-80 group-hover:opacity-100",
      text: "text-white",
      overlay: "absolute inset-0 bg-white/10 group-hover:bg-transparent"
    },
    secondary: {
      bg: "border border-primary/40 bg-primary/5 backdrop-blur-sm group-hover:border-secondary group-hover:bg-secondary/10",
      text: "text-primary group-hover:text-secondary",
      overlay: "absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500"
    }
  };

  const current = variants[variant];

  // The actual button content
  const content = (
    <>
      {/* Background/Border Layer */}
      <div className={`absolute inset-0 transition-all duration-500 ${current.bg}`} />
      
      {/* Effect Overlay Layer */}
      <div className={current.overlay} />
      
      {/* Text & Icon Content */}
      <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${current.text}`}>
        {Icon && <Icon className="text-xl" />}
        {text}
      </span>
    </>
  );

  // Motion wrapper props
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: baseStyles,
    onClick: onClick
  };

  // Logic to return <a>, <Link>, or <button>
  if (href) return <motion.a href={href} download={download} {...motionProps}>{content}</motion.a>;
  if (to) return <motion.div className="inline-block"><Link to={to}><motion.div {...motionProps}>{content}</motion.div></Link></motion.div>;
  
  return <motion.button {...motionProps}>{content}</motion.button>;
};

export default TechButton;