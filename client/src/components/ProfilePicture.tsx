import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage1 from "../assets/profile.jpg";
import profileImage2 from "../assets/profile2.jpg";

interface ProfilePictureProps {
  onClick?: () => void;
}

export default function ProfilePicture({ onClick }: ProfilePictureProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [autoFlipInterval, setAutoFlipInterval] = useState<NodeJS.Timeout | null>(null);
  const [currentRole, setCurrentRole] = useState("");

  const roles = [
    "Artist",
    "Musician",
    "Music Producer",
    "Machine Learning Engineer",
    "Data Analyst",
    "Data Scientist",
    "Writer"
  ];

  // Auto flip image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 7000);

    setAutoFlipInterval(interval);

    return () => {
      if (autoFlipInterval) clearInterval(autoFlipInterval);
    };
  }, []);

  const handleClick = () => {
    if (autoFlipInterval) {
      clearInterval(autoFlipInterval);
      setAutoFlipInterval(null);
    }

    setIsFlipped(prev => !prev);

    const newInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 7000);

    setAutoFlipInterval(newInterval);

    if (onClick) onClick();
  };

  // Book flip variants
  const flipVariants = {
    front: { 
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    back: { 
      rotateY: 180,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div 
      className="relative w-48 h-48 mx-auto lg:mx-0 mb-8 perspective-500"
      onMouseEnter={() => {
        const randomRole = roles[Math.floor(Math.random() * roles.length)];
        setCurrentRole(randomRole);
      }}
      onMouseLeave={() => setCurrentRole("")}
    >
      <div 
        className="w-full h-full relative transform-style-3d cursor-pointer"
        onClick={handleClick}
      >
        <AnimatePresence initial={false}>
          <motion.div 
            className="absolute w-full h-full backface-hidden"
            animate={isFlipped ? "back" : "front"}
            variants={flipVariants}
            key="front"
          >
            <img 
              src={profileImage1} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-[#4ECDC4]"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
          <motion.div 
            className="absolute w-full h-full backface-hidden"
            animate={isFlipped ? "front" : "back"}
            variants={flipVariants}
            key="back"
            style={{
              rotateY: 180
            }}
          >
            <img 
              src={profileImage2} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-[#4ECDC4]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {currentRole && (
          <motion.div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#4ECDC4] text-white px-4 py-2 rounded-lg shadow-md text-sm z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {currentRole}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}