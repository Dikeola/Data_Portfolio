import { motion } from "framer-motion";
import AchievementBadge from "./AchievementBadge";

export default function Achievements() {
  const achievements = [
    {
      icon: "ri-line-chart-fill",
      title: "ACCA Data Analytics",
      description: "Professional certification in data analytics",
      issuer: "ACCA",
      iconColor: "#FF6B6B"
    },
    {
      icon: "ri-google-fill",
      title: "Advanced Data Analytics",
      description: "Professional certification in advanced data analytics",
      issuer: "Google",
      iconColor: "#4285F4"
    },
    {
      icon: "ri-python-line",
      title: "Python Data Associate",
      description: "Certification in Python for data science",
      issuer: "DataCamp",
      iconColor: "#4ECDC4"
    },
    {
      icon: "ri-file-excel-2-line",
      title: "Data Analyst",
      description: "Comprehensive data analysis certification",
      issuer: "DataCamp",
      iconColor: "#FFE66D"
    },
    {
      icon: "ri-database-line",
      title: "SQL Associate",
      description: "Database querying and management",
      issuer: "DataCamp",
      iconColor: "#FF9F1C"
    },
    {
      icon: "ri-bar-chart-box-line",
      title: "Data Literacy",
      description: "Foundation in data interpretation",
      issuer: "DataCamp",
      iconColor: "#7B61FF"
    },
    {
      icon: "ri-line-chart-line",
      title: "Business Intelligence",
      description: "Data Analyst Career Path",
      issuer: "Codecademy",
      iconColor: "#00C49A"
    },
    {
      icon: "ri-flask-line",
      title: "Data Science Foundations",
      description: "Fundamentals of data science",
      issuer: "Codecademy",
      iconColor: "#FF6B6B"
    },
    {
      icon: "ri-sql-line",
      title: "Analyze Data with SQL",
      description: "SQL for data analysis",
      issuer: "Codecademy",
      iconColor: "#4ECDC4"
    }
  ];

  return (
    <section id="achievements" className="py-16 relative overflow-hidden">
      {/* Background element - subtle, not animated */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#FFE66D] rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
          <span className="inline-block">Certifications</span> & Credentials
        </h2>
        
        <motion.div 
          className="relative w-full overflow-hidden h-[400px] flex items-center"
          whileHover={{ scale: 1 }}
          onHoverStart={e => {
            const element = e.target as HTMLElement;
            const scrollingDiv = element.querySelector('.scrolling-achievements') as HTMLElement;
            if (scrollingDiv) {
              const currentTransform = getComputedStyle(scrollingDiv).transform;
              scrollingDiv.style.transform = currentTransform;
              scrollingDiv.style.animation = 'none';
            }
          }}
          onHoverEnd={e => {
            const element = e.target as HTMLElement;
            const scrollingDiv = element.querySelector('.scrolling-achievements') as HTMLElement;
            if (scrollingDiv) {
              scrollingDiv.style.animation = '';
            }
          }}
        >
          <motion.div 
            className="flex gap-6 absolute left-0 scrolling-achievements"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="flex-none w-[300px]">
                <AchievementBadge
                  icon={achievement.icon}
                  title={achievement.title}
                  description={achievement.description}
                  issuer={achievement.issuer}
                  delay={0}
                  iconColor={achievement.iconColor}
                />
              </div>
            ))}
            {/* Duplicate achievements for seamless loop */}
            {achievements.map((achievement, index) => (
              <div key={`duplicate-${index}`} className="flex-none w-[300px]">
                <AchievementBadge
                  icon={achievement.icon}
                  title={achievement.title}
                  description={achievement.description}
                  issuer={achievement.issuer}
                  delay={0}
                  iconColor={achievement.iconColor}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Statistics */}
        <motion.div 
          className="mt-16 bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-display font-bold text-xl mb-6 text-center">Completed Learning & Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="text-4xl font-bold text-[#FF6B6B] mb-2">476</div>
              <div className="text-sm text-gray-600">Codecademy Badges</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="text-4xl font-bold text-[#4ECDC4] mb-2">50+</div>
              <div className="text-sm text-gray-600">DataCamp Courses</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="text-4xl font-bold text-[#FFE66D] mb-2">300+</div>
              <div className="text-sm text-gray-600">Completed Projects</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://www.datacamp.com/portfolio/dikeola62" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[#4ECDC4] hover:underline font-medium"
            >
              View DataCamp Portfolio <i className="ri-external-link-line ml-1"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
