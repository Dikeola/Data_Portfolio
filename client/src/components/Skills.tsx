import { motion } from "framer-motion";
import DataScienceRadarChart from "./DataScienceRadarChart";
import tableauLogo from "../assets/logos/tableau.png";

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background element - subtle, not animated */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4ECDC4] rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
          <span className="inline-block">Skills</span> & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skill Card: Data Analysis */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 border-t-4 border-[#FF6B6B]"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#FF6B6B] bg-opacity-20 rounded-lg flex items-center justify-center text-[#FF6B6B] mr-4">
                <i className="ri-bar-chart-2-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold">Data Analysis</h3>
            </div>
            <p className="mb-4 text-[#2E282A]">Transforming raw data into actionable insights using:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FF6B6B] mr-2"></i>
                <span>Python (Pandas, NumPy)</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FF6B6B] mr-2"></i>
                <span>SQL (PostgreSQL, MySQL)</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FF6B6B] mr-2"></i>
                <span>Statistical Analysis</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FF6B6B] mr-2"></i>
                <span>Data Cleaning & Processing</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Skill Card: Data Visualization */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 border-t-4 border-[#4ECDC4]"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4ECDC4] bg-opacity-20 rounded-lg flex items-center justify-center text-[#4ECDC4] mr-4">
                <i className="ri-pie-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold">Data Visualization</h3>
            </div>
            <p className="mb-4 text-[#2E282A]">Creating clear and insightful data visualizations with:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#4ECDC4] mr-2"></i>
                <span>Matplotlib & Seaborn</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#4ECDC4] mr-2"></i>
                <span>Tableau</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#4ECDC4] mr-2"></i>
                <span>Plotly & Interactive Charts</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#4ECDC4] mr-2"></i>
                <span>Tableau Analytics</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#4ECDC4] mr-2"></i>
                <span>Dashboard Development</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Skill Card: Machine Learning */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 border-t-4 border-[#7B61FF]"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#7B61FF] bg-opacity-20 rounded-lg flex items-center justify-center text-[#7B61FF] mr-4">
                <i className="ri-brain-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold">Machine Learning</h3>
            </div>
            <p className="mb-4 text-[#2E282A]">Building and optimizing ML models using:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#7B61FF] mr-2"></i>
                <span>Linear & Logistic Regression</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#7B61FF] mr-2"></i>
                <span>Clustering & Classification</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#7B61FF] mr-2"></i>
                <span>Model Tuning & Optimization</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#7B61FF] mr-2"></i>
                <span>XGBoost & Random Forests</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#7B61FF] mr-2"></i>
                <span>Feature Engineering</span>
              </li>
            </ul>
          </motion.div>

          {/* Skill Card: Web Development */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 border-t-4 border-[#FFE66D]"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#FFE66D] bg-opacity-20 rounded-lg flex items-center justify-center text-[#FFE66D] mr-4">
                <i className="ri-code-s-slash-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold">Web Development</h3>
            </div>
            <p className="mb-4 text-[#2E282A]">Building web applications and interactive interfaces:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FFE66D] mr-2"></i>
                <span>HTML/CSS/JavaScript</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FFE66D] mr-2"></i>
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FFE66D] mr-2"></i>
                <span>E-commerce Solutions</span>
              </li>
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-[#FFE66D] mr-2"></i>
                <span>Modern Web Frameworks</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Data Science Radar Chart */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-6 text-center">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Radar Chart */}
            <div className="md:col-span-2">
              <DataScienceRadarChart />
            </div>
            
            {/* Skills Legend */}
            <div className="bg-white p-6 rounded-xl shadow-lg md:mt-0 mt-4">
              <h4 className="font-bold text-lg mb-4">Tech Stack Expertise</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#FF6B6B] rounded-full mr-2"></div>
                  <span className="text-sm">Python (Pandas, NumPy, scikit-learn)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#4ECDC4] rounded-full mr-2"></div>
                  <span className="text-sm">SQL (PostgreSQL, MySQL)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#FFE66D] rounded-full mr-2"></div>
                  <span className="text-sm">Tableau, Power BI</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#7B61FF] rounded-full mr-2"></div>
                  <span className="text-sm">Matplotlib, Seaborn, Plotly</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#FF9F1C] rounded-full mr-2"></div>
                  <span className="text-sm">UI/UX Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#00C49A] rounded-full mr-2"></div>
                  <span className="text-sm">Frontend (React, HTML/CSS)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#6C757D] rounded-full mr-2"></div>
                  <span className="text-sm">Backend (Node.js, Express)</span>
                </div>
                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                  <i className="ri-information-line text-[#FF6B6B] mr-2"></i>
                  <span className="text-xs text-gray-500">Hover or tap on the chart for detailed percentages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
