import React, { useState, useEffect } from 'react';
import my_image from '../assets/my_image.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  const [currentWord, setCurrentWord] = useState("Developer");
  const words = ["Developer", "Programmer", "Student", "Project Leader"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(wordInterval); // Cleanup on component unmount
  }, []);

  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a <span className='fade-in-out'>{currentWord}</span>
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Ready to bring innovative solutions to your team, leveraging my expertise in front-end development, project management, and strategic technology implementation to drive impactful results and elevate your digital presence. Connect with me today to transform your vision into reality.
          </p>
          <div>
            <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={my_image} alt="my personal" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>

      {/* Adding CSS for fade effect */}
      <style jsx>{`
        .fade-in-out {
          opacity: 0;
          animation: fade 3s infinite;
        }

        @keyframes fade {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;
