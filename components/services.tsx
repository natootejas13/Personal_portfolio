import React from 'react'
import assets, { serviceData } from '../assets/assets'
import Image from 'next/image'

const Services = () => {
    return (
        <>
            <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 '>
                <h2 className='text-center mb-2 text-5xl'>My Services</h2>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-10'>Here are some of the things that I am good at <br />and could help you with</p>
                <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-14'>
                </div>
                <div className='grid gridtemplatecols gap-6 my-10'>
                    {serviceData.map(({ icon, title, description, link }, index) => (
                        <div key={index} className='border-[0.5px] border-b-black rounded-2xl p-6 cursor-pointer hover:-translate-y-1.5 duration-450 hover:shadow-light-bg items-center justify-center hover:bg-lavender dark:bg-transparent dark:hover:bg-violet dark:hover:shadow-dark-bg dark:border-off-white'>
                            <Image src={icon} alt='' className='w-10 mt-4 p-1' />
                            <h4 className='my-4 font-bold text-black dark:text-off-white'>{title}</h4>
                            <p className='text-grey dark:text-off-white text-sm'>{description}</p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5 font-semibold '>Read more <Image src={assets.right_arrow} alt='' className='w-4 ' /></a>

                        </div>
                    ))}

                </div>
            </div>
        </>

    )
}

export default Services