import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import my_image from '../assets/my_image.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const words = ["Student", "Programmer", "Leader", "Developer", "Explorer"];

const Home = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 150 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div name="Home" className='w-full pt-24 pb-8 md:pb-16 bg-[#FFFFF0]'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className='flex flex-col justify-center h-full w-full md:w-1/2'>
            <h2 className='text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
              I'm a{" "}
              <motion.span
                className="inline-block border-r-2 pr-1"
                transition={{ repeat: Infinity, duration: 1 }}
              >
                {text}
              </motion.span>
            </h2>
            <motion.p
              className='text-gray-700 py-4 max-w-md'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ready to bring innovative solutions to your team, leveraging my expertise in front-end development, project management, and strategic technology implementation to drive impactful results and elevate your digital presence. Connect with me today to transform your vision into reality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                to='Portfolio'
                smooth
                duration={500}
                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-800 cursor-pointer'
              >
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <MdKeyboardArrowRight size={25} className='ml-1' />
                </span>
              </Link>
            </motion.div>
          </div>
          {/* Image Section with Animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <img
              src={my_image}
              alt="my personal"
              className='rounded-2xl mx-auto w-2/3 md:w-full'
            />
          </motion.div>
      </div>
    </div>
  );
};

export default Home;
