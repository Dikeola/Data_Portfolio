import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import goldenNutHavenImg from "../assets/projects/golden-nut-haven.png";
import nebulaNoodlesImg from "../assets/projects/nebula-noodles.png";
import neoNubianImg from "../assets/projects/neonubian.png";
import TableauShowcase from "./TableauShowcase";

export default function Projects() {
  const projects = [
    {
      image: neoNubianImg,
      title: "NeoNubian Design Studio",
      description: "A professional design studio portfolio showcasing creative works and services with a modern, minimal interface.",
      tag: "UI/UX Design",
      tagColor: "#4ECDC4",
      links: {
        demo: "https://webdev-1255.onrender.com",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: nebulaNoodlesImg,
      title: "Nebula Noodles",
      description: "A cosmic Asian fusion restaurant website with a celestial design theme, featuring an interactive 'Build Your Dish' experience and orbital menu navigation.",
      tag: "Web Development",
      tagColor: "#FF6B6B",
      links: {
        demo: "https://webdev-r1pe.onrender.com",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: goldenNutHavenImg,
      title: "Golden Nut Haven",
      description: "E-commerce platform for premium nuts with product customization, order processing, and responsive design.",
      tag: "E-commerce",
      tagColor: "#FFE66D",
      links: {
        demo: "https://golden-nut-haven.windsurf.build",
        github: "https://github.com/Dikeola"
      }
    },

  ];

  return (
    <section id="projects" className="py-16 bg-[#4ECDC4] text-[#2E282A] relative overflow-hidden">
      {/* Background elements - subtle, not animated */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#FF6B6B] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#4ECDC4] rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
          <span className="inline-block">Featured</span> Projects
        </h2>
        <motion.p 
          className="text-lg text-center max-w-2xl mx-auto mb-12"
          animate={{
            color: ['#2E282A', '#4ECDC4', '#FF6B6B', '#2E282A'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          A showcase of my web development and data analysis projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tag={project.tag}
              tagColor={project.tagColor}
              links={project.links}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com/Dikeola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4ECDC4] hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </div>
      </div>
      <TableauShowcase />
    </section>
  );
}