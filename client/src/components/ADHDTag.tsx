import { useState } from "react";
import { motion, useAnimate } from "framer-motion";

interface ADHDTagProps {
  text: string;
  color?: string;
  delay?: number;
  onClick?: () => void;
  isHeader?: boolean;
}

// Standardized colors for different tags
const TAG_COLORS = {
  "UI/UX Design": "#4ECDC4",
  "E-commerce": "#FFE66D",
  "Web Development": "#FF6B6B",
  "Data Analysis": "#FF9F1C",
  "Mobile App": "#6B66FF"
} as const;

export default function ADHDTag({ 
  text, 
  color = TAG_COLORS["Web Development"], 
  delay = 0, 
  onClick, 
  isHeader = false 
}: ADHDTagProps) {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(true);
  
  // Get the standardized color for the tag
  const tagColor = TAG_COLORS[text as keyof typeof TAG_COLORS] || color;
  
  const handleClick = () => {
    if (isHeader) {
      // Drop down and zoom off animation
      animate(scope.current, { 
        y: 100, 
        x: [0, 100, 200, 400], 
        scale: [1, 0.8, 0.5, 0.1],
        opacity: [1, 0.8, 0.5, 0]
      }, {
        duration: 1,
        ease: "easeOut",
      });
      
      // Hide temporarily
      setIsVisible(false);
      
      // Bring it back after 3 seconds
      setTimeout(() => {
        // Reset position offscreen first
        animate(scope.current, { 
          y: -100, 
          x: -400, 
          opacity: 0,
          scale: 0.1,
        }, { duration: 0 });
        
        // Make visible again
        setIsVisible(true);
        
        // Animate back in
        setTimeout(() => {
          animate(scope.current, { 
            y: 0, 
            x: 0, 
            opacity: 1,
            scale: 1,
            backgroundColor: tagColor,
          }, { 
            duration: 0.8,
            type: "spring",
            bounce: 0.5
          });
        }, 50);
      }, 3000);
    } else {
      // Regular click animation for non-header tags
      animate(scope.current, { 
        scale: 1.2,
        rotate: Math.random() * 20 - 10,
      }, {
        duration: 0.3,
        type: "spring",
      });
      
      // Reset animation
      setTimeout(() => {
        animate(scope.current, { 
          scale: 1,
          rotate: 0,
        }, { duration: 0.3 });
      }, 500);
    }
    
    // Call parent onClick if provided
    if (onClick) onClick();
  };

  return (
    <motion.div
      ref={scope}
      className="adhd-tag-container"
      initial={{ backgroundColor: tagColor }}
      animate={isHeader ? {
        // Smaller, subtle animation for header tag
        y: [0, -5, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }
      } : {}}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", bounce: 0.5 }
      }}
      onClick={handleClick}
      style={{
        display: isVisible ? "inline-flex" : "none",
        padding: isHeader ? "0.3rem 0.7rem" : "0.5rem 1rem",
        backgroundColor: tagColor,
        color: "white",
        borderRadius: "50px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
        fontSize: isHeader ? "0.8rem" : "1rem"
      }}
    >
      <span>{text}</span>
      <div className="adhd-trail"></div>
    </motion.div>
  );
}
