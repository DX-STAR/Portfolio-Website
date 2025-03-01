import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const achievements = [
  {
    title: 'CodeStorm Hackathon',
    description: 'Developed an innovative AI solution for detecting phishing domain detection tool',
    date: 'October 2023',
    image: '/Certificates/CodeStorm_Hackathon.jpg'
  },  
  {
    title: 'General Body Member in Rotaract Club',
    description: 'Served as a general body member in the Rotaract Club of my college, Engaging in various social activities',
    date: '2023',
    image: '/Certificates/1st year RC Certificate.png'
  },
  {
    title: 'Google Certification',
    description: 'The Fudamentals of Digital Marketing',
    date: '2020',
    image: '/Certificates/Google Marketing Certificate.png'
  },
  {
    title: 'Need for Code 2.0 Hackathon',
    description: 'Developed a Website to help people in finding College Scholarships nationwide using HTML, CSS, and JavaScript',
    date: '2023',
    image: '/Certificates/tantra Hackathon_.jpg'
  },
  {
    title: 'Marketing Team Member in CSI-TSEC',
    description: 'Served as a member of the Marketing Team in the Computer Society of India, TSEC working on raising funds and bringing sponsors for the events',
    date: '2023',
    image: '/Certificates/CSI-JCOM Certificate Devang Gupta_page-0001.jpg'
  },
  {
    title: 'TCS Certification',
    description: 'Completed the "Master Data Management for Beginners" certification from TCS iON! This course has enhanced my understanding of the core concepts and significance of Data Management Systems and The fundamentals and importance of Master Data Management (MDM)',
    date: '2024',
    image: '/Certificates/Devang_Gupta_Data Analyst Certificate_page-0001.jpg'
  }
];

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hall of Fame</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Recognition and milestones in my journey
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-2">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="h-64 w-full bg-cover"
                        />
                      </div>
                      <div className="p-8 md:w-1/2">
                        <div className="flex items-center mb-4">
                          <Award className="w-6 h-6 text-yellow-500 mr-2" />
                          <span className="text-sm text-yellow-500">{achievement.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index
                    ? 'bg-yellow-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;