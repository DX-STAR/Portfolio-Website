import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const roles = [
  {
    title: 'Web Developer',
    icon: Code,
    description: 'Building responsive and modern web applications using React and TypeScript',
  },
  {
    title: 'Data Analyst',
    icon: Database,
    description: 'Analyzing complex datasets to derive meaningful insights using Python and SQL',
  },
  {
    title: 'AI Enthusiast',
    icon: Brain,
    description: 'Exploring machine learning and deep learning technologies to solve real-world problems',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate undergraduate student pursuing AI & Data Science, with a keen interest in developing
            innovative solutions that bridge the gap between technology and real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-4">
                  <role.icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {role.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;