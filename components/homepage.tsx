import React from 'react'
import assets from '../assets/assets'
import Image from 'next/image'
import { motion, spring } from "motion/react"

const HomePage = () => {
    return (
        <>
            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
                <motion.div
                initial={{scale:0}}
                whileInView={{scale:1}}
                transition={{duration:1, type:spring, stiffness:100}}>
                    <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
                </motion.div>

                <motion.h3
                initial={{y:-20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1.2, delay: 0.1}}

                className='flex items-end gap-2.5 text-xl md:text-2xl mb-3'>Hi, I'am Tejas Natoo <Image src={assets.hand_icon} alt='' className='w-5' /></motion.h3>
                <motion.h1 
                initial={{y:-30, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1.2, delay: 0.2}}
                
                className='text-3xl sm:text-6xl lg:text[-66px]'>A frontend developer based in Pune</motion.h1>
                <motion.p 
                initial={{y:20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1, delay: 0.5}}
                className='max-w-2xl mx-auto'>I am a Tech enthusiast and a front end web developer from Pune, India with 3 years of experience in the domains of web development, cyber security, manual testing, process monitoring and Devops.</motion.p>

                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8, delay: 1}}
                className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href='#contact' className='px-10 py-3 border-2 rounded-full border-black bg-black dark:border-light-grey dark:bg-transparent text-off-white flex items-center gap-2 hover:translate-y-1 hover:font-semibold duration-300 hover:shadow-black'>Contact Me <Image src={assets.right_arrow} alt='' className='w-4' /></a>
                    <a href='/files/Tejas_Resume_77.pdf' download className='px-10 py-3 border-2 rounded-full border-light-grey dark:border-black flex items-center gap-2 hover:translate-y-1 duration-300 hover: shadow-light-grey hover:font-semibold dark:text-grey dark:bg-off-white'>Resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
                </motion.div>
            </div>
        </>
    )
}

export default HomePage