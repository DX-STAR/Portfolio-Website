import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "C Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Object-Oriented Programming", icon: "/Assets/OOPs.png" },
  { name: "Data Structures & Algorithms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Artificial Intelligence", icon: "/Assets/AI.png" },
  { name: "Machine Learning", icon: "/Assets/ML.png" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const TechStackDisplay = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technologies I Work With</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-center mb-8">
        A blend of programming languages, frameworks, and databases that help me craft high-quality applications and solve complex problems.
      </p>
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* First Row: Left to Right */}
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`row1-${index}`}
              className="flex flex-col items-center bg-gray-200 dark:bg-gray-800 p-6 m-2 rounded-2xl shadow-lg hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform duration-300"
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2 filter drop-shadow-lg" />
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Second Row: Right to Left */}
        <motion.div
          className="flex w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`row2-${index}`}
              className="flex flex-col items-center bg-gray-200 dark:bg-gray-800 p-6 m-2 rounded-2xl shadow-lg hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform duration-300"
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2 filter drop-shadow-lg" />
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackDisplay;