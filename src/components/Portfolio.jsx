import React from 'react'
import tindog from '../assets/tindog.png'
import real_estate from '../assets/real_estate.png'
import online_voting from '../assets/online_voting.png'
import bi from '../assets/bi.png'
import social from '../assets/social.png'
import memoir from '../assets/memoir.png'

const Portfolio = () => {
  return (
    <div name='Portfolio' className='bg-[#FFFFF0] text-gray-800 md:h-screen pt-20 sm:pt-0'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800 '>PORTFOLIO</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={bi} alt="BI" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href="https://binariintelligence.in/" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href="https://github.com/BinariIntelligence/BinariIntelligenceWebsite/tree/Yogendra" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={tindog} alt="Tindog" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href="https://yogi03.github.io/TinDog-Website/" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href="https://github.com/yogi03/TinDog-Website" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={real_estate} alt="Real Estate" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href="https://github.com/yogi03/Real-Estate" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href="https://github.com/yogi03/Real-Estate" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={online_voting} alt="Online Voting" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href="https://github.com/Rajat2774/OnlineVotingSystem" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href="https://github.com/Rajat2774/OnlineVotingSystem" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={memoir} alt="Memoir" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href="https://github.com/yogi03/memoir" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href="https://github.com/yogi03/memoir" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={social} alt="Social" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href="https://yogi03.github.io/Dice/" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href="https://github.com/yogi03/Dice" target="_blank" rel="noopener noreferrer" className='w-1/2'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
