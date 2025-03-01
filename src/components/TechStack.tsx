import React from 'react';

const technologies = [
  { name: 'Python', category: 'Languages', icon: '🐍' },
  { name: 'JavaScript', category: 'Languages', icon: '📜' },
  { name: 'TypeScript', category: 'Languages', icon: '💪' },
  { name: 'C++', category: 'Languages', icon: '⚡' },
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'HTML5', category: 'Frontend', icon: '🌐' },
  { name: 'CSS3', category: 'Frontend', icon: '🎨' },
  { name: 'Express', category: 'Backend', icon: '🚂' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'SQL', category: 'Database', icon: '📊' },
  { name: 'Power BI', category: 'Analytics', icon: '📈' },
  { name: 'Git', category: 'Tools', icon: '📚' }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl mb-2" role="img" aria-label={tech.name}>
                {tech.icon}
              </span>
              <h3 className="text-gray-900 dark:text-white font-medium text-sm">
                {tech.name}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;