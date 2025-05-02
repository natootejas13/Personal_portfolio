import React from 'react'
import assets, { workData } from '../assets/assets'
import Image from 'next/image'

const Work = ({darkTheme}) => {
    return (
        <>
            <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 '>
                <h2 className='text-center mb-2 text-5xl'>My Projects</h2>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-10'>Welcome to my portfolio! Here is a list of the projects that I have worked on.</p>
                <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-16'>
                </div>
                <div className='grid gridtemplatecols gap-5 my-10'>
                    {workData.map((project, index) => (
                        <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-work-card-text-bg w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 p-3 flex items-center justify-between duration-300 group-hover:-translate-y-1.5'>
                                <div >
                                    <h4 className='my-4 font-semibold text-black'>{project.title}</h4>
                                    <p className='text-grey text-sm'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 shadow-[2px_2px_0_#1B262C] aspect-square flex items-center justify-center group-hover:bg-lime transition'>
                                    
                                    <a href={project.link} target='_blank' rel='noopener noreferrer'><Image  src={assets.send_icon} alt='send' className='w-5 ' /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <a href='' className='w-max flex items-center justify-center gap-2 border-[1px] border-b-black dark:border-off-white rounded-full text-grey px-8 py-3 mx-auto my-15 hover:duration-300 hover:font-semibold dark:bg-transparent dark:text-off-white'>Show more <Image src={darkTheme?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='' className='w-5' /></a>

        </>
    )
}

export default Work