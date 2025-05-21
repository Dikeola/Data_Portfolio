import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ADHDTag from "./ADHDTag";
import { useMediaQuery } from "@/hooks/use-mobile";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Certifications" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#F7FFF7] bg-opacity-80 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <ADHDTag text="toldyouiwasgood" isHeader={true} />
            <h1 className="text-xl sm:text-2xl font-display font-extrabold ml-2">
              <span className="text-[#FF6B6B]">Dikeola</span> 
              <span className="text-[#4ECDC4]">Ogunmola</span>
            </h1>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-medium hover:text-[#FF6B6B] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMobileMenu}
              className="text-2xl"
            >
              <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && (
        <motion.div 
          className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-b-lg shadow-lg">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#4ECDC4] hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
