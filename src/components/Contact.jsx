// Contact.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

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
        <> Mail <HiOutlineMail size={30} /> </>
      ), 
      href: "mailto:yogendrachaurasiya30@gmail.com",
    },
    {
      id: 4,
      child: (
        <> Resume <BsFillPersonLinesFill size={30} /> </>
      ), 
      href: "/yogendra_resume.pdf",
      style: "rounded-br-md",
      download: true, 
    },
  ];

  return (
    <div name='Contact' className='w-full max-h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form given below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='user_name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <input type="text" name='user_email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <textarea name="message" rows='10' placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button type='submit' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
          </form>
        </div>

        
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 lg:hidden'>
          {links.map(({ id, child, href, style, download }) => (
            <div key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
              <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>{child}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
