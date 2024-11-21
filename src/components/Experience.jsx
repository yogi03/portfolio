"use client";

import React from "react";
import { IconCloud } from "./IconCloud"; // Ensure this path is correct

// Define the slugs of the technologies you want to display in the icon cloud
const iconSlugs = [
  "cplusplus",
  "python",
  "html5",
  "css3",
  "javascript",
  "bootstrap",
  "tailwindcss",
  "react",
  "flask",
  "django",
  "mysql",
  "postgresql",
  "github",
  "visualstudiocode",
  "figma",
  "git",
  "gitlab",
  "netlify",
  "vercel",
  "firebase",
  "firestore",
];

const Experience = () => {
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full max-h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            EXPERIENCE
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        {/* Render the dynamic icon cloud */}
        <div className="flex justify-center items-center">
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
    </div>
  );
};

export default Experience;



// import React from 'react';
// import html from '../assets/html.png';
// import css from '../assets/css.png';
// import javascript from '../assets/JavaScript.png';
// import bootstrap from '../assets/bootstrap.png';
// import tailwind from '../assets/tailwind.png';
// import react from '../assets/react.png';
// import flask from '../assets/flask.png';
// import django from '../assets/django.png';
// import mysql from '../assets/mysql.png';
// import python from '../assets/python.png';
// import cpp from '../assets/cpp.png';
// import PostgreSQL from '../assets/PostgreSQL.png';
// import github from '../assets/github.png';

// const Experience = () => {
//   const techs = [
//     {
//       id: 1,
//       src: cpp,
//       title: 'C++',
//       style: 'shadow-blue-500',
//     },
//     {
//       id: 2,
//       src: python,
//       title: 'Python',
//       style: 'shadow-yellow-500',
//     },
//     {
//       id: 3,
//       src: html,
//       title: 'HTML',
//       style: 'shadow-orange-500',
//     },
//     {
//       id: 4,
//       src: css,
//       title: 'CSS',
//       style: 'shadow-blue-500',
//     },
//     {
//       id: 5,
//       src: javascript,
//       title: 'JavaScript',
//       style: 'shadow-yellow-500',
//     },
//     {
//       id: 6,
//       src: bootstrap,
//       title: 'Bootstrap',
//       style: 'shadow-violet-600',
//     },
//     {
//       id: 7,
//       src: tailwind,
//       title: 'Tailwind',
//       style: 'shadow-sky-400',
//     },
//     {
//       id: 8,
//       src: react,
//       title: 'React',
//       style: 'shadow-blue-600',
//     },
//     {
//       id: 9,
//       src: flask,
//       title: 'Flask',
//       style: 'shadow-gray-800',
//     },
//     {
//       id: 10,
//       src: django,
//       title: 'Django',
//       style: 'shadow-green-700',
//     },
//     {
//       id: 11,
//       src: mysql,
//       title: 'MySQL',
//       style: 'shadow-orange-500',
//     },
//     {
//       id: 12,
//       src: PostgreSQL,
//       title: 'PostgreSQL',
//       style: 'shadow-blue-600',
//     },
//     {
//       id: 13,
//       src: github,
//       title: 'GitHub',
//       style: 'shadow-gray-400',
//     },
//   ];

//   return (
//     <div
//       name="Experience"
//       className="bg-gradient-to-b from-gray-800 to-black w-full max-h-fit"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             EXPERIENCE
//           </p>
//           <p className="py-6">These are the technologies I've worked in</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={src} alt="HTML_img_logo" className="w-20 mx-auto" />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
