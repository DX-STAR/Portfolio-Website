import React, { useState } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import BuyMeCoffee from "./BuyMeCoffee";

const Footer = () => {
  const [isCoffeeOpen, setIsCoffeeOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-2xl font-bold text-yellow-500">DG</span>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Aspiring AI & Data Science Specialist based in Mumbai, India.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Blogs", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:example@example.com" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <button
                onClick={() => setIsCoffeeOpen(true)}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors duration-300"
              >
                Buy Me a Coffee
              </button>
            </div>
          </div>
        </div>
      </footer>

      {isCoffeeOpen && <BuyMeCoffee setIsOpen={setIsCoffeeOpen} />}
    </>
  );
};

export default Footer;