import React from 'react';
import { motion } from 'framer-motion';
import tindog from '../assets/tindog.png';
import real_estate from '../assets/real_estate.png';
import online_voting from '../assets/online_voting.png';
import bi from '../assets/bi.png';
import social from '../assets/social.png';
import memoir from '../assets/memoir.png';
import dict from '../assets/dict.png';
import fashion from '../assets/fashion.png';

const projects = [
  {
    img: bi,
    alt: 'BI',
    demo: 'https://binariintelligence.in/',
    code: 'https://github.com/BinariIntelligence/BinariIntelligenceWebsite/tree/Yogendra',
  },
  {
    img: dict,
    alt: 'Dictionary',
    demo: 'https://drive.google.com/file/d/1PgJEBGIj4tMDumPZSxUj8XL7ckyvoPAO/view?usp=drivesdk',
    code: 'https://github.com/yogi03/QuickDefine',
  },
  {
    img: fashion,
    alt: 'Fashion AI',
    demo: 'https://drive.google.com/file/d/16sw5O2vC0MRkaSiiiOnPedag0dgSNNtx/view?usp=sharing',
    code: 'https://github.com/yogi03/fashion-ai',
  },
  {
    img: tindog,
    alt: 'Tindog',
    demo: 'https://yogi03.github.io/TinDog-Website/',
    code: 'https://github.com/yogi03/TinDog-Website',
  },
  {
    img: real_estate,
    alt: 'Real Estate',
    demo: 'https://github.com/yogi03/Real-Estate',
    code: 'https://github.com/yogi03/Real-Estate',
  },
  {
    img: online_voting,
    alt: 'Online Voting',
    demo: 'https://github.com/Rajat2774/OnlineVotingSystem',
    code: 'https://github.com/Rajat2774/OnlineVotingSystem',
  },
  {
    img: memoir,
    alt: 'Memoir',
    demo: 'https://github.com/yogi03/memoir',
    code: 'https://github.com/yogi03/memoir',
  },
  {
    img: social,
    alt: 'Social',
    demo: 'https://yogi03.github.io/Dice/',
    code: 'https://github.com/yogi03/Dice',
  },
];

const Portfolio = () => {
  return (
    <div name='Portfolio' className='bg-[#FFFFF0] text-gray-800 py-8'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className='pb-8'
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-800'>PORTFOLIO</p>
          <p className='py-6'>Check out some of my work right here</p>
        </motion.div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='shadow-md shadow-gray-600 rounded-lg'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={project.img}
                alt={project.alt}
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a href={project.demo} target='_blank' rel='noopener noreferrer' className='w-1/2'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href={project.code} target='_blank' rel='noopener noreferrer' className='w-1/2'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
