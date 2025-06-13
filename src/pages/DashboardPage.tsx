import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, MessageSquare, Users, Plus, TrendingUp, Award, Clock } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    { icon: FileText, label: 'Resumes Created', value: '3', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, label: 'Portfolios Built', value: '2', color: 'from-purple-500 to-pink-500' },
    { icon: MessageSquare, label: 'Mock Interviews', value: '5', color: 'from-green-500 to-emerald-500' },
    { icon: Award, label: 'Profile Score', value: '85%', color: 'from-orange-500 to-red-500' },
  ];

  const recentActivity = [
    { action: 'Updated Software Engineer Resume', time: '2 hours ago', type: 'resume' },
    { action: 'Completed Mock Interview for Google', time: '1 day ago', type: 'interview' },
    { action: 'Published Portfolio Website', time: '3 days ago', type: 'portfolio' },
    { action: 'Generated Cover Letter for Microsoft', time: '1 week ago', type: 'resume' },
  ];

  const quickActions = [
    { icon: FileText, title: 'Create Resume', description: 'Generate a new AI-powered resume', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, title: 'Build Portfolio', description: 'Showcase your work professionally', color: 'from-purple-500 to-pink-500' },
    { icon: MessageSquare, title: 'Practice Interview', description: 'Simulate real interview scenarios', color: 'from-green-500 to-emerald-500' },
    { icon: Users, title: 'Get Career Advice', description: 'Chat with our AI career coach', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
              <p className="text-gray-600 mt-1">Let's continue building your career success</p>
            </div>
            <div className="flex items-center space-x-3">
              <img 
                src="/WhatsApp Image 2025-05-10 at 9.21.34 AM.jpeg" 
                alt="Profile" 
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickActions.map((action, index) => (
                <div
                  key={action.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                    Get Started
                    <Plus className="ml-1" size={16} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="text-gray-400 mr-1" size={12} />
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
                View All Activity
              </button>
            </div>
          </motion.div>
        </div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Your Career Progress</h2>
                <p className="text-blue-100 mb-4">You're 85% complete on your professional profile</p>
                <div className="w-64 bg-blue-400 rounded-full h-2 mb-4">
                  <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Complete Profile
                </button>
              </div>
              <div className="hidden md:block">
                <TrendingUp size={80} className="text-blue-200" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;