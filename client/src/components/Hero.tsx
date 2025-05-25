import { motion } from "framer-motion";
import ProfilePicture from "./ProfilePicture";
import ADHDTag from "./ADHDTag";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background elements - reduced animation */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-[#FFE66D] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-[#FF6B6B] rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile & Info */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Profile Picture */}
              <ProfilePicture />
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-center lg:text-left mb-4">
                <span className="inline-block">
                  Hello!
                </span> I'm
                <span className="relative text-[#FF6B6B]">
                  Dikeola
                  <motion.span 
                    className="absolute -top-1 right-0 transform -translate-x-1/2 -translate-y-1/2 text-xs bg-[#FFE66D] px-2 py-1 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    creative
                  </motion.span>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-center lg:text-left mb-6">
                A <span className="font-bold text-[#4ECDC4]">data analyst & scientist</span> with expertise in <span className="italic">turning raw data into valuable insights</span> and creating engaging web experiences
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <ADHDTag text="Python" />
                <ADHDTag text="Data Analysis" />
                <ADHDTag text="Machine Learning" />
                <ADHDTag text="UI/UX Design" />
                <ADHDTag text="Visualization" />
                <ADHDTag text="Frontend" />
              </div>
              
              <div className="flex justify-center lg:justify-start gap-4">
                <motion.a 
                  href="#projects"
                  className="bg-[#4ECDC4] hover:bg-[#2AB7AE] text-white font-bold py-3 px-8 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See My Work
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="border-2 border-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white text-[#4ECDC4] font-bold py-3 px-8 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </div>
          </div>
          
          {/* Technology Skills Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-6 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-center">Technical Expertise</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Data Science Technologies */}
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                    alt="Python" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">Python</span>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                    alt="SQL" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">SQL</span>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" 
                    alt="Pandas" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">Pandas</span>
                </motion.div>
                
                {/* Web Development Technologies */}
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                    alt="React" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">React</span>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                    alt="JavaScript" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">JavaScript</span>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                    alt="Figma" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">UI/UX</span>
                </motion.div>

                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://pbs.twimg.com/profile_images/1268207088683020288/d9agkn4h_400x400.jpg" 
                    alt="Tableau" 
                    className="w-12 h-12 mb-2"
                    style={{ borderRadius: '4px' }}
                  />
                  <span className="text-sm font-medium">Tableau</span>
                </motion.div>

                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzA2QjZENEIiIGQ9Ik0xMi4wMDEsNC44Yy0zLjIsMC01LjIsMi4yLTYsNC44YzEuMi0xLjYsMi42LTIuMiw0LjItMS44YzAuOTEzLDAuMjI4LDEuNTY1LDAuODksMi4yODgsMS42MjQgQzEzLjY2NiwxMC42MTgsMTUuMDI3LDEyLDE4LjAwMSwxMmMzLjIsMCw1LjItMS4yLDYtMy44Yy0xLjIsMS42LTIuNiwyLjItNC4yLDEuOGMtMC45MTMtMC4yMjgtMS41NjUtMC44OS0yLjI4OC0xLjYyNCBDMTYuMzM3LDcuMTgyLDE0Ljk3Niw0LjgsMTIuMDAxLDQuOHogTTYuMDAxLDEyYy0zLjIsMC01LjIsMS4yLTYsMy44YzEuMi0xLjYsMi42LTIuMiw0LjItMS44YzAuOTEzLDAuMjI4LDEuNTY1LDAuODksMi4yODgsMS42MjQgYzEuMTc3LDEuMTk0LDIuNTM4LDIuNTc2LDUuNTEyLDIuNTc2YzMuMiwwLDUuMi0yLjIsNi00LjhjLTEuMiwxLjYtMi42LDIuMi00LjIsMS44Yy0wLjkxMy0wLjIyOC0xLjU2NS0wLjg5LTIuMjg4LTEuNjI0IEMxMC4zMzcsMTIuMzgyLDguOTc2LDEyLDYuMDAxLDEyeiIvPjwvc3ZnPg==" 
                    alt="TailwindCSS" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">TailwindCSS</span>
                </motion.div>

                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                    alt="TypeScript" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">TypeScript</span>
                </motion.div>

                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                    alt="Node.js" 
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium">Node.js</span>
                </motion.div>
              </div>
              
              <div className="mt-6 text-center">
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  <i className="ri-star-fill text-[#FFE66D] mr-1"></i> Data Science & Web Development
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}