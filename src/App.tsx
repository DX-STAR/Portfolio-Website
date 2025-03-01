import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, ArrowUp, Download, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TechStack from './components/TechStack';
// import Projects from './components/Projects';
// import Blogs from './components/Blogs';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Education />
          <TechStack />
          <Achievements />

          {/*yet to complete the commented codeyet to complete the commented code*/ }
          {/* <Projects />
          <Blogs /> */}
          
          <Contact />
        </main>
        <Footer />
        
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-yellow-500 dark:bg-yellow-600 p-3 rounded-full shadow-lg hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;