import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaTimes, FaMinus, FaExpand } from 'react-icons/fa'

const Page7 = () => {
    const [currentCommand, setCurrentCommand] = useState('')
    const [commandHistory, setCommandHistory] = useState([])
    const [showContactForm, setShowContactForm] = useState(false)
    const [cursorVisible, setCursorVisible] = useState(true)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const commands = {
        'help': {
            output: [
                'Available commands:',
                '  help         - Show this help message',
                '  about        - About this portfolio',
                '  contact      - Show contact information',
                '  social       - Display social media links',
                '  connect      - Open contact form',
                '  clear        - Clear terminal',
                '  whoami       - Display user information'
            ]
        },
        'about': {
            output: [
                'Portfolio Terminal v2.0.1',
                'Built with React + Vite',
                'Designed for developers who love terminal interfaces',
                'Type "help" for available commands'
            ]
        },
        'contact': {
            output: [
                'Contact Information:',
                '📧 Email: your.email@example.com',
                '📍 Location: Your City, Country',
                '💼 Available for: Full-time opportunities',
                '⏰ Response time: Within 24 hours'
            ]
        },
        'social': {
            output: [
                'Social Media Links:',
                '🐙 GitHub: github.com/yourusername',
                '💼 LinkedIn: linkedin.com/in/yourprofile',
                '🐦 Twitter: twitter.com/yourusername',
                '📧 Email: your.email@example.com'
            ]
        },
        'whoami': {
            output: [
                'user@portfolio:~$ whoami',
                'Passionate Developer',
                'Frontend enthusiast with a love for clean code',
                'Currently seeking new opportunities'
            ]
        },
        'connect': {
            action: () => setShowContactForm(true),
            output: ['Opening contact form...']
        },
        'clear': {
            action: () => setCommandHistory([]),
            output: []
        }
    }

    // Cursor blinking effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev)
        }, 530)
        return () => clearInterval(interval)
    }, [])

    // Auto-run welcome sequence
    useEffect(() => {
        const welcomeSequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            await typeCommand('Welcome to my portfolio terminal!')
            await new Promise(resolve => setTimeout(resolve, 500))
            await typeCommand('Type "help" to see available commands')
        }
        welcomeSequence()
    }, [])

    const typeCommand = async (text) => {
        setCommandHistory(prev => [...prev, { type: 'system', content: text }])
    }

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase()
        setCommandHistory(prev => [...prev, { type: 'input', content: `user@portfolio:~$ ${cmd}` }])
        
        if (commands[trimmedCmd]) {
            if (commands[trimmedCmd].action) {
                commands[trimmedCmd].action()
            }
            if (commands[trimmedCmd].output.length > 0) {
                commands[trimmedCmd].output.forEach((line, index) => {
                    setTimeout(() => {
                        setCommandHistory(prev => [...prev, { type: 'output', content: line }])
                    }, index * 100)
                })
            }
        } else if (trimmedCmd) {
            setCommandHistory(prev => [...prev, { type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for available commands.` }])
        }
        setCurrentCommand('')
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setCommandHistory(prev => [...prev, 
            { type: 'system', content: 'Message sent successfully!' },
            { type: 'system', content: 'Thank you for reaching out. I\'ll get back to you soon!' }
        ])
        setShowContactForm(false)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className='min-h-screen bg-black text-green-400 p-6 relative overflow-hidden'>
            {/* Background Effects */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className='absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl'
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl'
            />

            <div className='relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center'>
                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='bg-gray-900 border border-green-500 rounded-lg shadow-terminal overflow-hidden'
                >
                    {/* Terminal Header */}
                    <div className='bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-green-500'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                        </div>
                        <div className='text-green-400 text-sm font-mono'>
                            portfolio@terminal:~
                        </div>
                        <div className='flex items-center space-x-2 text-green-400'>
                            <FaMinus className='w-3 h-3 hover:text-green-300 cursor-pointer' />
                            <FaExpand className='w-3 h-3 hover:text-green-300 cursor-pointer' />
                            <FaTimes className='w-3 h-3 hover:text-red-400 cursor-pointer' />
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className='p-6 h-96 overflow-y-auto font-mono text-sm scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800'>
                        {/* Command History */}
                        <AnimatePresence>
                            {commandHistory.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`mb-1 ${
                                        item.type === 'error' ? 'text-red-400' :
                                        item.type === 'system' ? 'text-blue-400' :
                                        item.type === 'input' ? 'text-green-400' :
                                        'text-gray-300'
                                    }`}
                                >
                                    {item.content}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Current Input Line */}
                        <div className='flex items-center mt-2'>
                            <span className='text-green-400 mr-2'>user@portfolio:~$</span>
                            <input
                                type='text'
                                value={currentCommand}
                                onChange={(e) => setCurrentCommand(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleCommand(currentCommand)}
                                className='bg-transparent border-none outline-none text-green-400 flex-1 font-mono'
                                placeholder='Type a command...'
                                autoFocus
                                aria-label='Terminal command input'
                                spellCheck='false'
                            />
                            <span className={`text-green-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                                █
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='mt-8 flex justify-center space-x-8'
                >
                    {[
                        { Icon: FaGithub, label: 'GitHub', href: '#' },
                        { Icon: FaLinkedin, label: 'LinkedIn', href: '#' },
                        { Icon: FaTwitter, label: 'Twitter', href: '#' },
                        { Icon: FaEnvelope, label: 'Email', href: 'mailto:your.email@example.com' }
                    ].map(({ Icon, label, href }, index) => (
                        <motion.a
                            key={label}
                            href={href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            className='group bg-gray-900 border border-green-500 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20'
                        >
                            <Icon className='text-2xl text-green-400 group-hover:text-green-300 transition-colors duration-300' />
                            <div className='text-xs text-gray-400 mt-2 font-mono'>{label}</div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Contact Form Modal */}
            <AnimatePresence>
                {showContactForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4'
                        onClick={() => setShowContactForm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className='bg-gray-900 border border-green-500 rounded-lg p-6 w-full max-w-md'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='flex items-center justify-between mb-6'>
                                <h3 className='text-green-400 font-mono text-lg'>contact_form.exe</h3>
                                <button
                                    onClick={() => setShowContactForm(false)}
                                    className='text-red-400 hover:text-red-300'
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            
                            <form onSubmit={handleFormSubmit} className='space-y-4'>
                                <div>
                                    <label className='block text-green-400 text-sm font-mono mb-2'>Name:</label>
                                    <input
                                        type='text'
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className='w-full bg-gray-800 border border-green-500 rounded px-3 py-2 text-green-400 font-mono focus:outline-none focus:border-green-300'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className='block text-green-400 text-sm font-mono mb-2'>Email:</label>
                                    <input
                                        type='email'
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className='w-full bg-gray-800 border border-green-500 rounded px-3 py-2 text-green-400 font-mono focus:outline-none focus:border-green-300'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className='block text-green-400 text-sm font-mono mb-2'>Message:</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className='w-full bg-gray-800 border border-green-500 rounded px-3 py-2 text-green-400 font-mono focus:outline-none focus:border-green-300 h-24 resize-none'
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type='submit'
                                    className='w-full bg-green-500 text-black font-mono py-2 rounded hover:bg-green-400 transition-colors duration-300'
                                >
                                    send_message()
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Page7