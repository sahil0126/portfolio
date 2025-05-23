import React from 'react'
import profile from '../assets/profile.jpeg'
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'  >

       
    

        <div  className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'   >
            <div  className='flex flex-col justify-center h-full'   >
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'  >Hey there, I’m</h2>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'  >Sahil Rajurkar</h2>
                <p  className='text-gray-500 py-4 max-w-md'  >
                I specialize in Java, Spring Boot, Hibernate, ReactJS, and MySQL.  
  
  Passionate about backend development, I’m eager to learn and contribute to impactful projects.

                </p>

                <div>
                    <Link 
                    to='projects'
                    smooth
                    duration={500}
                    className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 cursor-pointer '  >
                    
                    Projects

                    <span className='group-hover:rotate-90 duration-300 '  >

                    <HiArrowSmRight size={20} className='ml-1'   />
                    </span>
                    </Link>
                </div>
            </div>
            <div>
                 <img src={profile} className=' rounded-2xl mx-auto
                 w-1/2   '  alt='my profile'  />
            </div>
        </div>

    </div>
  )
}

export default Home