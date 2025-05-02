import Image from 'next/image'
import React from 'react'
import assets, { footerIcons } from '../assets/assets'

const Footer = () => {
    return (
        <>
            <div className='mt-20'>
                <div className='text-center sm:flex items-center justify-between border-t border-b-black mx-[10%] mt-12 py-6'>
                    <p>© 2025 Tejas Natoo. All rights reserved.</p>
                    <ul className='flex items-center gap-3 sm:gap-5 justify-center mt-5' >
                        {footerIcons.map(({ icon, link }, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 cursor-pointer hover:-translate-y-1 duration-400 ' key={index}>
                                <a href={link} target='_blank' rel='noopener noreferrer'>
                                    <Image src={icon} alt='' className='w-3.5 sm:w-8' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer