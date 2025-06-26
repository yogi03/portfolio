import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full max-h-fit bg-[#FFFFF0] text-gray-800 pt-20 pb-0 sm:pb-8 sm:pt-0'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-1'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>ABOUT</p>
            </div>
            <p className='text-md mt-8'>
            Hello, I'm Yogendra Chaurasiya, a Computer Science student at the University of Delhi, set to graduate in 2026 with a B.Sc. (Research). 
            I am passionate about full-stack web development, software development, C++, Data Structures and Algorithms (DSA) and Python programming. 
            </p>
            <br />
            <p className='text-md'> 
            My technical expertise includes React, TailwindCSS, JavaScript, Firebase, Postgres, Firestore and Django demonstrated through my various projects.   
            I hold certifications in Python Problem Solving from HackerRank, Full Stack Web Development from Udemy, and C++ from CodeChef. 
            As the Tech Head at 180 Degrees Consulting, I develop and implement technology strategies.
            </p>
            <br />
            <p className='text-md'>      
            My commitment to continuous learning and self-improvement drives me to stay updated with industry trends and embrace new challenges. Let's connect and explore how we can collaborate in the exciting world of technology. 
            Feel free to reach out – I'm always ready for a meaningful challenge and a great conversation!
            </p>
        </div>
    </div>
  )
}

export default About
