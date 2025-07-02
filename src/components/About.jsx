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
          Hello! I’m Yogendra Chaurasiya, a Computer Science student at the University of Delhi (B.Sc. Research, 2026) with a strong 
          interest in full-stack development, C++, Python, and data structures and algorithms. 
        </motion.p>

        <motion.p
          className='text-md mt-4 leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          I’ve worked on a range of projects—from web platforms to AI-driven tools—using technologies like React, Tailwind CSS, Django, 
          Firebase, and PostgreSQL. I currently serve as the Cloud Lead at GDG Dyal Singh College, where I enjoy leading initiatives 
          and collaborating with peers. My professional experience includes internships at Binari Intelligence, where I contributed to 
          their main website and built test page and dashboard for ed-tech platform.
        </motion.p>

        <motion.p
          className='text-md mt-4 leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          I hold certifications in Python (HackerRank), Full Stack Web Development (Udemy), C++ (CodeChef), and Generative AI with 
          Langchain and Huggingface (Udemy). These experiences have helped me build a strong foundation in both machine learning and 
          deep learning.
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
