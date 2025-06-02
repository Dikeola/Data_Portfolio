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
      links: {
        demo: "https://golden-nut-haven.windsurf.build",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: "/images/Tizeti.png",
      title: "Tizeti",
      description: "A modern telecommunications company website showcasing their internet services and solutions.",
      tag: "Web Development",
      links: {
        demo: "https://tizeti.onrender.com",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: "/images/Innoson Vehicles.png",
      title: "Innoson Vehicles",
      description: "A modern automotive website featuring an intuitive user interface, seamless navigation, and engaging vehicle showcases. Focused on delivering an exceptional user experience with interactive features and responsive design.",
      tag: "UI/UX Design",
      links: {
        demo: "https://innoson-vehicles.onrender.com",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: "/images/TastyBakes by oma.png",
      title: "TastyBakes by Oma",
      description: "A bakery website showcasing delicious treats, custom orders, and online ordering capabilities.",
      tag: "E-commerce",
      links: {
        demo: "https://tastybakesbyoma.onrender.com",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: "/images/Ganbis Bakery.png",
      title: "Ganbis Bakery",
      description: "A premium bakery website featuring artisanal breads, pastries, and custom cake orders.",
      tag: "E-commerce",
      links: {
        demo: "https://ganbis-bakery.onrender.com",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: "/images/Steel Dip Global.png",
      title: "Steel Dip Global",
      description: "A manufacturing company website showcasing their steel products and industrial solutions.",
      tag: "Web Development",
      links: {
        demo: "https://steeldipglobal.onrender.com",
        github: "https://github.com/Dikeola"
      }
    },
    {
      image: "/images/Meat.com.ng.png",
      title: "Meat.com.ng",
      description: "An online meat marketplace offering premium quality meats and delivery services.",
      tag: "E-commerce",
      links: {
        demo: "https://meat-com-ng.onrender.com",
        github: "https://github.com/Dikeola"
      }
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tag={project.tag}
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
