import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name='About' className='w-full bg-[#FFFFF0] text-gray-800 py-8 md:py-10'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col w-full'>

        {/* Heading */}
        <motion.div
          className='pb-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-800'>
            ABOUT
          </p>
        </motion.div>

        {/* Paragraphs */}
        <motion.p
          className='text-md mt-6 leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Hello, I'm Yogendra Chaurasiya, a Computer Science student at the University of Delhi, set to graduate in 2026 with a B.Sc. (Research). 
          I am passionate about full-stack web development, software development, C++, Data Structures and Algorithms (DSA) and Python programming. 
        </motion.p>

        <motion.p
          className='text-md mt-4 leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My technical expertise includes React, TailwindCSS, JavaScript, Firebase, Postgres, Firestore and Django demonstrated through my various projects.   
          I hold certifications in Python Problem Solving from HackerRank, Full Stack Web Development from Udemy, and C++ from CodeChef. 
          As the Tech Head at 180 Degrees Consulting, I develop and implement technology strategies.
        </motion.p>

        <motion.p
          className='text-md mt-4 leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My commitment to continuous learning and self-improvement drives me to stay updated with industry trends and embrace new challenges. Let's connect and 
          explore how we can collaborate in the exciting world of technology. Feel free to reach out – I'm always ready for a meaningful challenge and a great conversation!
        </motion.p>

      </div>
    </div>
  );
};

export default About;
