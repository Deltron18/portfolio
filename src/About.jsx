import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  const steps = [
    {
      year: "2023", title: "first line of code", description: "started my journey with HTML,css and javascript."
    },
    {
      year: "2024", title: "dived into react", description: "built my first react project and explored component-based architecture."
    },
    {
      year: "2024", title: "3d & animations", description: "experimented with three.js, GSAP, and framer motion."
    },
    {
      year: "2025", title: "exploring backed & Full Stack", description: "Learning node.js express,and MongoDB , building full-stack applications."
    },
    {
      year: "2025", title: "crating unique experiences", description: "building futuristic,interactive web applications."
    }
  ]


  return (
    //   <div className='min-h-screen bg-black text-green-400 py-20 px-6 '>

    //     <motion.h2 className='text-3xl md:text-5xl font-bold text-center mb-10'
    //       initial={{ x: -70, opacity: 0 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 1 }}
    //       viewport={{ once: false }}
    //     >
    //       📜 The Evolution
    //     </motion.h2>

    //     <div className='max-w-3xl mx-auto relative'>
    //       <div className=''>
    //         {steps.map((steps, index) => (
    //           <motion.div
    //           key={index}
    //           initial={{ y: 50, opacity: 0 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6,delay:index*0.3 }}
    //           viewport={{ once: false }}
    //           className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-col"}`}
    //           >
    //             <div>
    //               {steps.year}
    //             </div>
    //             <div></div>
    //             <motion.div>
    //               <h3>{steps.title}</h3>
    //               <h3>{steps.description}</h3>
    //             </motion.div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>



    //   </div>
    // )

    <div className='min-h-screen bg-black text-green-400 py-20 px-6'>
      <motion.h2
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='text-3xl md:text-5xl font-bold text-center mb-10'
      >
        📜 The Evolution
      </motion.h2>

      <div className='max-w-3xl mx-auto relative'>
        <div className='hidden md:block absolute left-1/2 transform -transform-x-1/2 w-1 h-full bg-gray-600 opacity-30'>  </div>
        {steps.map((steps, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div className={`md:w-1/3 w-full text-green-400 text-lg font-semibold text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
              {steps.year}
            </div>

            <div className='w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-800 shadow-md md:mx-6 my-4 md:my-0'></div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className='md:w-1/3 w-full bg-black p-5 rounded-lg shadow-lg text-center border border-green-400'
            >
              <h3 className='text-xl font-bold text-yellow-400'>{steps.title}</h3>
              <p className='text-gray-300 mt-2'>{steps.description}</p>
            </motion.div>

          </motion.div>
        ))}

      </div>
    </div>
  )

}
export default About