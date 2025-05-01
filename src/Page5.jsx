import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Page5 = () => {

    const skills=[
        {name:"React",level:100},
        {name:"Node.js",level:10},
        {name:"Tailwind CSS",level:90},
        {name:"Three.js",level:50},
        {name:"Framer Motion",level:70},
        {name:"GSAP",level:90},
        {name:"MongoDB",level:10},
        {name:"Python",level:30},
        

    ]

    const[abc,setAbc]=useState(null)
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black text-green-400 px-6 relative'>
      <motion.h2
             initial={{opacity:0,x:-70}}
             whileInView={{opacity:1,x:0}}
            
             transition={{duration:1}}
             viewport={{once:false}}
              className='text-3xl md:text-5xl font-bold text-center mb-10'
             >
             📜 Check My Skills
             </motion.h2>

             <div className='relative w-full max-w-4xl h-[400px] md:h-[500px]'>
                {skills.map((skill,index) =>{
                    const size=skill.level / 3 + 40;
                    const randomX=Math.random() * 80 + 10;
                    const randomY=Math.random() * 80 + 10;

                    return(
                        <motion.div
                        style={{
                            width:`${size}px`,
                            backgroundColor:abc === skill.name ? "#10b981" : "#22c55e",
                            height:`${size}px`,
                            left:`${randomX}%`,
                            top:`${randomY}%`
                        }}
                        onMouseEnter={() => setAbc(skill.name)}
                        onMouseLeave={() => setAbc(null)}

                        initial={{opacity:0,scale:0.5}}
                        whileInView={{opacity:1,scale:1}}
                       
                        transition={{duration:1}}
                        viewport={{once:false}}


                        
                        className='absolute rounded-full  text-center items-center justify-center font-bold text-black cursor-pointer shadow-lg'
                        >
                            <h1 className=' text-md'>{skill.name}</h1>
                           <p className='text-sm text-red-500'>{skill.level}%</p>
                        </motion.div>
                    )
                })}
             </div>
    </div>
  )
}

export default Page5