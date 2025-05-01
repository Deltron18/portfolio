import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
const Page7 = () => {
    const[text,setText]=useState("")
    const finalM= "Thanks for visiting! Let's build something amazing..thanks for visiting! Let's build something amazing."

    useEffect(() =>{
        let index=0;
        const interval=setInterval(()=>{
            setText((prev) => prev + finalM[index])
            index++;
            if(index === finalM.length)  clearInterval(interval)
        },80)
    return () => clearInterval(interval)
    },[])
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black text-green-400 px-6 relative'>
        <motion.div
        initial={{opacity:0,scale:0.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:2,ease:"easeOut"}}
        className='absolute w-96 h-96 bg-green-500 opacity-20 rounded-full blur-3xl'></motion.div>
   
    <motion.h2
     initial={{opacity:0,y:30}}
     animate={{opacity:1,y:0}}
     transition={{duration:1,delay:0.5}}
     className='text-3xl md:text-5xl font-bold relative z-10'
    >
        Let's Connect
    </motion.h2>

    <motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:1,delay:0.5}}
      className='mt-6 flex space-x-6 relative z-10'
    >
     <a href=""><FaGithub className='text-4xl hover:text-green-300 transition transform hover:scale-110'></FaGithub></a>
     <a href=""><FaEnvelope className='text-4xl hover:text-green-300 transition transform hover:scale-110'></FaEnvelope></a>
     <a href=""><FaLinkedin className='text-4xl hover:text-green-300 transition transform hover:scale-110'></FaLinkedin></a>
    </motion.div>
   
   <div className='mt-12 bg-gray-900 p-6 rounded-lg border border-green-500 w-full  max-w-lg text-lg font-mono relative z-10'>
    <p>deltron@portfolio</p>
    <p>{text}</p>
   </div>
    </div>
  )
}

export default Page7