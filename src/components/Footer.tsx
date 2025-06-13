import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Resume Generator', href: '/services' },
        { name: 'Portfolio Builder', href: '/services' },
        { name: 'Interview Simulator', href: '/services' },
        { name: 'AI Career Coach', href: '/services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/insights' },
        { name: 'Career Tips', href: '/insights' },
        { name: 'Resume Templates', href: '/insights' },
        { name: 'Interview Guides', href: '/insights' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/WhatsApp Image 2025-05-10 at 9.21.34 AM.jpeg" 
                alt="Port AI Technologies" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Port AI Technologies</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering careers with AI-driven tools for portfolio building, resume creation, 
              and interview preparation. Join thousands of professionals advancing their careers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Port AI Technologies. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="https://portaitechnologies.com" className="hover:text-white transition-colors">
              portaitechnologies.com
            </a>
            <span>•</span>
            <a href="mailto:contact@portaitechnologies.com" className="hover:text-white transition-colors">
              contact@portaitechnologies.com
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
        <Link
          to="/register"
          className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Create Portfolio
        </Link>
      </div>
    </footer>
  );
};

export default Footer;