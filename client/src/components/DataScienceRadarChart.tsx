import React from "react";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

// Type for our chart data
interface Skill {
  subject: string;
  value: number;
  fullMark: number;
}

const DataScienceRadarChart: React.FC = () => {
  // Data science and web development competencies data
  const skills: Skill[] = [
    {
      subject: "Data Analysis",
      value: 95,
      fullMark: 100,
    },
    {
      subject: "Data Visualization",
      value: 90,
      fullMark: 100,
    },
    {
      subject: "Machine Learning",
      value: 80,
      fullMark: 100,
    },
    {
      subject: "SQL & Databases",
      value: 85,
      fullMark: 100,
    },
    {
      subject: "Statistics",
      value: 88,
      fullMark: 100,
    },
    {
      subject: "Python",
      value: 92,
      fullMark: 100,
    },
    {
      subject: "UI/UX Design",
      value: 85,
      fullMark: 100,
    },
    {
      subject: "Frontend Dev",
      value: 88,
      fullMark: 100,
    },
    {
      subject: "Backend Dev",
      value: 82,
      fullMark: 100,
    },
  ];

  return (
    <motion.div
      className="h-96 w-full bg-white p-4 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title has been moved to parent component */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#2E282A", fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="#FF6B6B"
            fill="#FF6B6B"
            fillOpacity={0.6}
            animationDuration={2000}
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Proficiency']}
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "8px", border: "none", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default DataScienceRadarChart;