import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Page4 = () => {
  const projects = [
    {
      id: 1,
      title: " 🛸 Mailing platform",
      desc: "An intelligent chatbot that understands context and emotions.",
      text: "React, Redux, Firebase, OpenAI API",
      link: 'https://fir-e8842.web.app/',
    },
    {
      id: 2,
      title: " 🚀 AI-Powered Image Enhancer",
      desc: "Enhances image quality using AI algorithms.",
      text: "React, framer motion, OpenAI API",
      link: 'https://image-enhancer-79743.web.app'
    },
    {
      id: 3,
      title: " 🧠 animated platform",
      desc: "An intelligent chatbot that understands context and emotions.",
      text: "React, GSAP, Shrey.js, framer motion",
      link: 'https://fir-e8842.web.app/'
    }
  ]

  const [openId, setOpenId] = useState(null)

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-green-400 px-6'>
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='text-3xl md:text-5xl font-bold text-center mb-10'
      >
        🔐 The Developer's Vault
      </motion.h1>

      <div className='space-y-6 w-full max-w-2xl'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='p-4 border border-green-400 rounded-lg shadow-lg relative  hover:shadow-green-500/40 transition-shadow duration-300'
          >
            <div className='flex items-center justify-between cursor-pointer' onClick={() => setOpenId(openId === project.id ? null : project.id)}>
              <h2 className='text-xl md:text-2xl font-semibold'>{project.title}</h2>
              <span className='text-yellow-400 text-2xl'>{openId === project.id ? '−' : '+'}</span>
            </div>

            <p className='mt-1'>{project.desc}</p>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: openId === project.id ? 1 : 0, y: openId === project.id ? 0 : -10 }}
              transition={{ duration: 0.5 }}
              className={`mt-3 text-gray-300 text-sm md:text-lg overflow-hidden transition-all duration-500 ${
                openId === project.id ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className='mt-1 text-green-300'>🔧 {project.text}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className='mt-2 inline-block text-green-300 underline hover:text-yellow-400 transition-colors duration-300'
              >
                🔗 Visit Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Page4
