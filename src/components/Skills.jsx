import React from 'react'
import java from "../assets/java.png"
import spring_boot from "../assets/spring-boot.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import github from "../assets/github.png"

const Skills = () => {

    const tech = [
        {
           id:1,
           src:html,
           title:"HTML",
           style:"shadow-orange-500" 
        },
        {
           id:2,
           src:css,
           title:"CSS",
           style:"shadow-blue-500" 
        },
        {
           id:3,
           src:javascript,
           title:"JavaScript",
           style:"shadow-yellow-500" 
        },
        {
           id:4,
           src:reactImage,
           title:"React",
           style:"shadow-blue-600" 
        },
        {
           id:5,
           src:java,
           title:"Java",
           style:"shadow-orange-400" 
        },
        {
           id:6,
           src:spring_boot,
           title:"Spring Boot",
           style:"shadow-green-500" 
        },
        {
           id:7,
           src:tailwind,
           title:"Tailwind",
           style:"shadow-cyan-500" 
        },
        {
           id:8,
           src:github,
           title:"GitHub",
           style:"shadow-gray-400" 
        },
    ]











  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen' >
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline my-15 ' >Skills</p>
             
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-14 px-12 sm:px-0' >

            {
                tech.map(({id,src,title,style})=>
                    (
                    
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` } >
                <img src={src} alt="" 
                className='w-20 mx-auto'
                />
                <p className='mt-4' >{title}</p>
            </div>
            )
                )
            }
            
        </div>
       </div> 
    </div>
  )
}

export default Skills