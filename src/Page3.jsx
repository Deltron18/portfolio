import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
const Page3 = () => {

    const messageText=[
        "📡 Incoming Transmission...",
        "🔍 Decrypting developer profile...",
        "👤 Identity: Full-Stack Developer",
        "🛠️ Core Technologies: React.js, Node.js, MongoDB, Tailwind CSS",
        "🚀 Specialty: Building immersive, high-performance applications",
        "🧠 Thought Process: Problem Solver | Innovation-Driven",
        "🛸 Current Mission: Crafting futuristic web experiences...",
        "📭 End of Transmission. Awaiting next command...",
            ]

            const[cM,setCM]=useState("")
            const[mI,setMI]=useState(0)

            useEffect(() =>{
                const interval= setInterval(() =>{
                    if(mI < messageText.length){
                        setCM((prev) => prev + messageText[mI] + "\n")
                        setMI((prev) => prev + 1)
                    }else{
                        clearInterval(interval)
                    }
                },2000)
                return () => clearInterval(interval)
            },[mI])
  return (
    <div className='h-screen flex justify-center items-center bg-black text-green-400 px-6'>
      <motion.div
      className='relative p-6 w-[90%] md:w-[60%] md:h-80 h-120 border border-green-400 rounded-xl shadow-xl bg-gray-900/20 backdrop-blur-lg'
      >
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:1.5,repeat:Infinity,repeatType:"reverse"}}
         className='absolute top-2 left-2 text-sm'
        >
            SIGNAL RECIEVED
        </motion.div>

        <pre className='whitespace-pre-wrap text-lg md:text-xl font-mono mt-10'>{cM}</pre>

        <motion.div className='absolute inset-0 rounded-xl border border-green-400 opacity-20 blur-md'
        animate={{opacity:[0.2,0.5,0.2]}}
        transition={{duration:2,repeat:Infinity}}
        ></motion.div>
      </motion.div>
    </div>
  )
}

export default Page3