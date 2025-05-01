import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
const Home = () => {
  const titleRef = useRef(null);
  const btnRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "bounce.out" }
    )
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 2, ease: "back.out(1.7)" }
    )
  }, [])


  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black text-green-400 px-6 relative overflow-hidden'>
      
      <motion.div className='absolute w-96 h-96 bg-green-500 opacity-20 rounded-full blur-3xl'
      initial={{x:"-50%",y:"-50%",opacity:0}}
      animate={{x:"10%",y:"10%",opacity:0.3}}
      transition={{duration:2,ease:"easeOut"}}
      >
      </motion.div>

      <motion.div className='absolute top-16 left-10 text-gray-500 font-mono text-sm opacity-60'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >

        {"<h1>Welcome to My Dev world</h1>"}
      </motion.div>

      <motion.div className='absolute bottom-16 right-10 text-gray-500 font-mono text-sm opacity-60'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {"<code>const passion='coding & crativity';</code>"}
      </motion.div>

      <motion.h1 className='text-4xl md:text-6xl font-extrabold tracking-wider relative z-10 cursor-pointer'
        ref={titleRef}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(0,255,0,0.6)" }}
      >
        🧑🏻‍💻hey,I'm Karan Singh
      </motion.h1>

      <motion.p className='mt-4 text-lg md:text-xl text-green-300 text-center max-w-2xl relative z-10'>
      "A passionate Full stack developer crafting interactive experiences 🚀 with modern tech and thoughtful design."
      </motion.p>

      <motion.button
      className='mt-6 px-6 py-3 text-lg text-black bg-green-400 font-semibold rounded-full shadow-lg transition relative z-10'
      ref={btnRef}
      whileHover={{scale:1.1,backgroundColor:"#00ff00",color:"#000"}}
      >
        Explore my work🚀
      </motion.button>

    </div>
  )
}

export default Home