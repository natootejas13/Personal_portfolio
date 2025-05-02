import Image from 'next/image'
import React from 'react'
import assets, { infoList, toolsData } from '../assets/assets'
import { motion } from "motion/react"

const AboutMe = ({darkTheme}) => {
    return (
        <>
            <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '
            initial={{ opacity:0}}
            whileInView={{ opacity:1}}
            transition={{duration:1.2}}
            >
                <h2 className='text-center mb-2 text-5xl'>About Me</h2>
                <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
                    <div className='w-60 sm:w-80 rounded-3xl max-w-none'><Image src={assets.user_image} alt='profile' className='w-full rounded-3xl' /></div>
                    <div className='flex-1'>
                        <p className='mb-10 max-w-2xl'>Experienced web and mobile app developer with 3 years in development and monitoring. Passionate about learning, with growing interests in cybersecurity and cloud computing. A football fan who enjoys gaming, cooking, photography, and traveling. Always up for a hiking trip — or a new team to join! 😜</p>
                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                            {infoList.map(({ icon, iconDark, title, description }, index) => (
                                <li key={index} className='border-[0.5px] border-b-black dark:bg-transparent rounded-xl p-6 cursor-pointer hover:bg-card-hover-light hover:-translate-y-1 duration-450 hover:shadow-light-bg dark:border-off-white dark:hover:bg-navy-blue dark:shadow-off-white'><Image src={darkTheme?iconDark:icon} alt={title} className='w-6 mt-3.5' /><h3 className='my-4 font-semibold text:black dark:text-skin '>{title}</h3><p className='text-grey dark:text-off-white text-sm'>{description}</p></li>
                            ))}
                        </ul>
                        <div className='p-1'>
                            <h4 className='my-5 '>Tools I use</h4>
                            <ul className='flex items-center gap-3 sm:gap-5'>
                                {toolsData.map((tool, index) => (
                                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-black rounded-lg cursor-pointer hover:-translate-y-1 duration-400 hover:shadow-grey dark:border-off-white' key={index}>
                                        <Image src={tool} alt=''className='w-5 sm:w-7'/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutMe