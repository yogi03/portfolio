import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-black bg-[#FFFFF0] fixed z-10'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Yogi</h1>
      </div>

      <ul className='hidden md:flex'>
        <li className='px-4 cursor-pointer font-bold text-gray-700 hover:scale-105 duration-200'><Link to='Home' smooth duration={500}>Home</Link> </li>
        <li className='px-4 cursor-pointer font-bold text-gray-700 hover:scale-105 duration-200'><Link to='About' smooth duration={500}>About</Link> </li>
        <li className='px-4 cursor-pointer font-bold text-gray-700 hover:scale-105 duration-200'><Link to='Portfolio' smooth duration={500}>Portfolio</Link> </li>
        <li className='px-4 cursor-pointer font-bold text-gray-700 hover:scale-105 duration-200'><Link to='Experience' smooth duration={500}>Experience</Link></li>
        <li className='px-4 cursor-pointer font-bold text-gray-700 hover:scale-105 duration-200'><Link to='Contact' smooth duration={500}>Contact</Link></li>
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-50 text-gray-700 md:hidden'>
        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars> }
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#FFFFF0] text-black'>
            <li className='px-4 cursor-pointer font-bold text-gray-700 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='Home' smooth duration={500}>Home</Link> </li>
            <li className='px-4 cursor-pointer font-bold text-gray-700 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='About' smooth duration={500}>About</Link> </li>
            <li className='px-4 cursor-pointer font-bold text-gray-700 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='Portfolio' smooth duration={500}>Portfolio</Link> </li>
            <li className='px-4 cursor-pointer font-bold text-gray-700 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='Experience' smooth duration={500}>Experience</Link></li>
            <li className='px-4 cursor-pointer font-bold text-gray-700 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='Contact' smooth duration={500}>Contact</Link></li>
           </ul>
      )}

      
    </div>
  )
}

export default Navbar
