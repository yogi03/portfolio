import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [nav, setNav] = useState(false);

  // Mobile menu container
  const containerVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.2 } },
  };

  // Individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Mobile toggle icon
  const iconVariants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.5 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 90, scale: 0.5 },
  };

  // Logo animation
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: 'spring', stiffness: 120 },
    },
  };

  // Desktop nav item animation
  const desktopItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-[#FFFFF0] fixed z-10">
      {/* Animated Logo */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        <h1 className="text-5xl font-signature ml-2">Yogi</h1>
      </motion.div>

      {/* Desktop Nav with animation */}
      <ul className="hidden md:flex">
        {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((link, index) => (
          <motion.li
            key={link}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={desktopItemVariants}
            className="px-4 cursor-pointer font-bold text-gray-700 hover:scale-105 duration-200"
          >
            <Link to={link} smooth={true} duration={1000} offset={-10}>
              {link}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile toggle icon (animated) */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={nav ? 'close' : 'open'}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25 }}
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-700 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#FFFFF0] text-black"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((link) => (
              <motion.li
                key={link}
                variants={itemVariants}
                className="px-4 cursor-pointer font-bold text-gray-700 py-6 text-4xl"
              >
                <Link onClick={() => setNav(false)} to={link} smooth={true} duration={1000} offset={-10}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
