import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: 'Smart Hospital Management System',
      description: 'Developed a responsive web application using HTML, CSS, and JavaScript to manage patient records,appointments, and doctor schedules efficiently. Enhanced user interaction through dynamic form validation andintuitive UI design.',
      image: 'Hospital Management System.jpg',
      tags: ['Javascript', 'CSS', 'HTML', ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/afrinruksar/Hospital-Management-System',
    },
    {
      title: 'SecureOTP',
      description: 'A Java-based project that generates secure and unique OTPs for authentication, ensuring randomness and security .',
      image: 'SecureOTP.webp',
      tags: ['JAVA',],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/afrinruksar/OTP-Generator',
    },
    {
      title: 'Online Food Order System',
      description: 'A web-based application for browsing menus, placing food orders, and racking deliveries. Included user login, cart.',
      image: 'food.jpg',
      tags: ['CSS', 'php', ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/afrinruksar/Online-Food-Delivery-System',
    },
    
    {
      title: 'News Daily',
      description: 'A responsive news website created with HTML, CSS, JS offring dynamic content updates and category filtering for an enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['JavaScript', 'CSS','HTML', ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://meek-mandazi-566bc1.netlify.app/',
    },
    {
      title: 'Titanic exploratory data analysis',
      description: 'Performed exploratory analysis on the Titanic dataset using NumPy and visualization tools. Found that survival was influenced by gender, age and passenger class — with women, children, and first-class passengers having higher survival rates.',
      image: 'titanic.jpeg',
      tags: ['NumPy',],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/afrinruksar/Titanic-Exploratory-Anlysis',
    },
  ];

  return (
    <motion.div
      className="container mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, y: 20 }}
    >
      <motion.h1 className="text-4xl font-bold mb-8 gradient-text text-center" variants={itemVariants}>
        My Projects
      </motion.h1>
      <motion.p className="text-text-secondary text-center max-w-2xl mx-auto mb-12" variants={itemVariants}>
        Here are some of the projects I've worked on. Each project represents a unique challenge and solution that I've developed.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;