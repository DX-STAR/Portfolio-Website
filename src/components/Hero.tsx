import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "ML Enthusiast", "Data Scientist", "AI Engineer", "Data Scientist", "Software Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed("#typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-gray-800 dark:to-gray-900 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-yellow-500 dark:text-yellow-400">
              Devang Gupta
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-grey-500 dark:text-gray-300 mb-8">
            <span className="text-gray-500 dark:text-white">I'm a{' '}</span>
            <span className="text-yellow-500 dark:text-gray-400">{'<'} </span>
            <span id="typed-text" className="inline-block text-yellow-500 dark:text-yellow-400"></span>
            <span className="text-yellow-500 dark:text-gray-400">{' >'}</span>
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Passionate about leveraging artificial intelligence and data science to solve real-world problems.
            Currently pursuing my undergraduate degree in AI & Data Science.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors duration-300"
          >
            Explore My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-200 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
};

export default Hero;