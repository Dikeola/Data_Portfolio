import { motion } from "framer-motion";

interface AchievementBadgeProps {
  icon: string;
  title: string;
  description: string;
  issuer: string;
  delay?: number;
  iconColor?: string;
}

export default function AchievementBadge({ 
  icon, 
  title, 
  description, 
  issuer, 
  delay = 0,
  iconColor = "#FF6B6B"
}: AchievementBadgeProps) {
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
      whileHover={{
        translateY: [0, -15, 20, -5, 0],
        translateX: [0, 10, -8, 3, 0],
        rotate: [0, 5, -3, 1, 0],
        transition: { duration: 1.5, repeat: Infinity }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.3,
      }}
      style={{
        zIndex: 1,
        cursor: "help",
      }}
    >
      <div 
        className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: `${iconColor}20` }} // 20 for 20% opacity
      >
        <i className={`${icon} text-3xl`} style={{ color: iconColor }}></i>
      </div>
      <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <span className="text-xs text-gray-500">{issuer}</span>
    </motion.div>
  );
}
