import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'Understanding Neural Networks: A Beginner\'s Guide',
    excerpt: 'A comprehensive introduction to neural networks and their applications in modern AI',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1676299081847-8b021cd4752e?auto=format&fit=crop&q=80&w=500',
    link: '#'
  },
  {
    title: 'Building Scalable Web Applications with React',
    excerpt: 'Best practices and patterns for creating maintainable React applications',
    date: 'March 1, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=500',
    link: '#'
  },
  {
    title: 'Data Science in Practice: Real-world Case Studies',
    excerpt: 'Exploring practical applications of data science in various industries',
    date: 'February 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500',
    link: '#'
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Blogs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sharing my thoughts and experiences in tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <a
                  href={blog.link}
                  className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;