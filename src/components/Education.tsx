import React from 'react';
import { GraduationCap, Building, Calendar } from 'lucide-react';
import TSECImage from '/Assets/TSEC_college_image.jpg';
import MithibaiImage from '/Assets/Mithibai_College Image.png';
import JankideviImage from '/Assets/jankidevi_public_school_logo.jpeg';

const educationData = [
  {
    institution: 'Thadomal Shahani Engineering College',
    degree: 'B.E. in Artificial Intelligence and Data Science',
    period: '2021 - 2026  (3rd Year Currently)',
    description: 'Currently pursuing undergraduate studies with focus on AI, ML, and Data Science',
    image: TSECImage
  },
  {
    institution: 'Mithibai College',
    degree: 'Junior College - Science',
    period: '2020 - 2022',
    description: 'Completed HSC with focus on Physics, Chemistry, and Mathematics',
    image: MithibaiImage
  },
  {
    institution: 'Jankidevi Public School',
    degree: 'Secondary School',
    period: '2007 - 2019',
    description: 'Completed ICSE with distinction',
    image: JankideviImage
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My academic journey and qualifications</p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={`${edu.institution}-${index}`}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:w-1/3">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="h-48 w-full object-cover md:object-contain"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h3>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Building className="w-4 h-4 mr-2" />
                  <span>{edu.degree}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description ?? 'No description available'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
