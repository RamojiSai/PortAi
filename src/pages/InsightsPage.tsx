import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, TrendingUp, BookOpen, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsPage = () => {
  const featuredPost = {
    title: 'The Ultimate Guide to AI-Powered Resume Writing in 2025',
    excerpt: 'Discover how artificial intelligence is revolutionizing resume creation and learn the strategies that top professionals use to stand out.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Chen',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Resume Tips'
  };

  const blogPosts = [
    {
      title: '10 Interview Questions AI Can Help You Master',
      excerpt: 'Learn how to leverage AI tools to prepare for the most common and challenging interview questions.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Marcus Johnson',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Interview Prep'
    },
    {
      title: 'Building a Portfolio That Gets You Hired',
      excerpt: 'Essential elements every professional portfolio needs to showcase your skills effectively.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emily Rodriguez',
      date: 'January 10, 2025',
      readTime: '5 min read',
      category: 'Portfolio Tips'
    },
    {
      title: 'Career Transition: From Traditional to Tech',
      excerpt: 'A step-by-step guide for professionals looking to break into the technology industry.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'David Kim',
      date: 'January 8, 2025',
      readTime: '7 min read',
      category: 'Career Change'
    },
    {
      title: 'Freelancer\'s Guide to Professional Branding',
      excerpt: 'How to build a personal brand that attracts high-quality clients and projects.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Lisa Park',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Freelancing'
    },
    {
      title: 'The Psychology of Successful Job Applications',
      excerpt: 'Understanding what hiring managers really look for and how to appeal to their decision-making process.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Michael Chen',
      date: 'January 3, 2025',
      readTime: '8 min read',
      category: 'Job Search'
    },
    {
      title: 'Remote Work: Optimizing Your Home Office for Success',
      excerpt: 'Create a productive workspace that enhances your professional image during video calls.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Anna Thompson',
      date: 'December 30, 2024',
      readTime: '5 min read',
      category: 'Remote Work'
    }
  ];

  const categories = [
    { name: 'Resume Tips', count: 15, icon: BookOpen },
    { name: 'Interview Prep', count: 12, icon: Target },
    { name: 'Portfolio Tips', count: 8, icon: TrendingUp },
    { name: 'Career Change', count: 10, icon: ArrowRight },
  ];

  const guides = [
    {
      title: 'Complete Resume Writing Checklist',
      description: 'A comprehensive checklist to ensure your resume hits all the right notes.',
      downloadLink: '#'
    },
    {
      title: 'Interview Preparation Workbook',
      description: 'Practice exercises and templates to ace your next interview.',
      downloadLink: '#'
    },
    {
      title: 'Portfolio Design Templates',
      description: 'Professional templates to showcase your work effectively.',
      downloadLink: '#'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Career
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, industry insights, and actionable tips to accelerate your career growth and professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="text-sm text-blue-600 font-semibold mb-2">{featuredPost.category}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  to="#"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 inline-flex items-center group"
                >
                  Read Article
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the guidance you need for your specific career goals.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} articles</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest career trends and strategies.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User size={14} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={14} className="mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to="#"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center group"
                  >
                    Read More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Free Career Guides</h2>
            <p className="text-xl text-blue-100">Download our comprehensive guides to accelerate your career growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                <Link
                  to={guide.downloadLink}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 inline-flex items-center group w-full justify-center"
                >
                  Download Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;