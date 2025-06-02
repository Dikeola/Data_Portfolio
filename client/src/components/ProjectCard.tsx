import { motion } from "framer-motion";
import ADHDTag from "./ADHDTag";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tag: string;
  tagColor?: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export default function ProjectCard({ 
  image, 
  title, 
  description, 
  tag, 
  tagColor = "#FF6B6B",
  links 
}: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-white text-[#2E282A] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} project preview`} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-display font-bold">{title}</h3>
          <ADHDTag text={tag} color={tagColor} />
        </div>
        <p className="mb-4 text-sm sm:text-base text-gray-600 flex-grow">{description}</p>
        <div className="flex flex-wrap justify-between items-center gap-2 mt-auto">
          <a 
            href={links.demo || "#"} 
            className="text-[#FF6B6B] font-medium hover:underline flex items-center text-sm sm:text-base"
          >
            <span>View Project</span>
            <i className="ri-arrow-right-line ml-1"></i>
          </a>
          <div className="flex space-x-2">
            {links.github && (
              <motion.a 
                href={links.github}
                className="text-gray-500 hover:text-[#FF6B6B] text-lg sm:text-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                aria-label="GitHub Repository"
              >
                <i className="ri-github-fill"></i>
              </motion.a>
            )}
            {links.demo && (
              <motion.a 
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#FF6B6B] text-lg sm:text-xl"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                aria-label="Live Demo"
              >
                <i className="ri-external-link-line"></i>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
