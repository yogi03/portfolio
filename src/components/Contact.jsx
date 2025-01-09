// Contact.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_deev4li', 'template_ur4r9ox', form.current, {
        publicKey: 'vxQwXRcpi8uJ-05cJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  const links = [
    {
      id: 1,
      child: (
        <> LinkedIn <FaLinkedin size={30} /> </>
      ), 
      href: "https://www.linkedin.com/in/yogendra-chaurasiya/",
      style: "rounded-tr-md" 
    },
    {
      id: 2,
      child: (
        <> GitHub <FaGithub size={30} /> </>
      ), 
      href: "https://github.com/YogendraChaurasiya",
    },
    {
      id: 3,
      child: (
          <> LeetCode <SiLeetcode size={30} /> </>
      ),
      href: "https://leetcode.com/u/yogi30/",
    },
    {
      id: 4,
      child: (
          <> GeeksforGeeks <SiGeeksforgeeks size={30} /> </>
      ),
      href: "https://www.geeksforgeeks.org/user/tusharchaurasiya/",
    },
    {
      id: 5,
      child: (
        <> Mail <HiOutlineMail size={30} /> </>
      ), 
      href: "mailto:yogendrachaurasiya30@gmail.com",
    },
    {
      id: 6,
      child: (
        <> Resume <BsFillPersonLinesFill size={30} /> </>
      ), 
      href: "/yogendra_resume.pdf",
      style: "rounded-br-md",
      download: true, 
    },
  ];

  return (
    <div name='Contact' className='w-full max-h-fit bg-[#FFFFF0] py-8 text-gray-800'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-800'>CONTACT</p>
          <p className='py-6'>Drop me a line</p>
        </div>

        <div className='flex justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='user_name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-gray-800 focus:outline-none' required/>
            <input type="text" name='user_email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-gray-800 focus:outline-none' required/>
            <textarea name="message" rows='10' placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-gray-800 focus:outline-none' required></textarea>
            <button type='submit' className='text-white bg-gray-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
          </form>
        </div>

        
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 lg:hidden'>
          {links.map(({ id, child, href, style, download }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <a href={href} className='flex justify-between items-center w-full text-gray-800' download={download} target='_blank' rel='noreferrer'>{child}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
