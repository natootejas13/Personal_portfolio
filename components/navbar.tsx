'use client'
import React, { useEffect, useRef, useState } from 'react'
import assets from '../assets/assets'
import Image from 'next/image'

const Navbar = ({ darkTheme, setDarkTheme }) => {
    const [isScroll, setIsScroll] = useState(false);

    const sideMenu = useRef();

    const openMenu = () => {
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenu.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-pale-blue opacity-100 dark:bg-grey dark:text-off-white" : ""}`}>
                <a href='#top'><Image src={darkTheme?assets.logo_dark:assets.logo} className='w-40 cursor-pointer mr-10' alt={''} /></a>
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3 text-grey bg-pale-blue dark:bg-grey dark:text-off-white'>
                    <li><a href='#top' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300'>Home</a></li>
                    <li><a href='#about' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300'>About</a></li>
                    <li><a href='#services' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300'>Services</a></li>
                    <li><a href='#work' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300'>Work</a></li>
                    <li><a href='#contact' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300'>Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={()=>setDarkTheme(prev =>!prev)}>
                        <Image src={darkTheme?assets.sun_icon:assets.moon_icon} className='w-6' alt='' />
                    </button>
                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full ml-4 font-mono text-grey dark:text-off-white font-semibold hover:translate-y-1 duration-300'>Contact <Image src={darkTheme?assets.arrow_icon_dark:assets.arrow_icon} className='w-3' alt={''} /></a>
                    <button className='block md:hidden ml-3.5' onClick={openMenu}><Image src={darkTheme?assets.menu_white:assets.menu_black} className='w-6' alt='' /></button>
                </div>
                {/*<-------------------------Mobile Navbar----------------------------->*/}

                <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-pale-blue dark:bg-grey transition-duration-500'>
                    <div className='absolute right-5 top-5' onClick={closeMenu}>
                        <Image src={darkTheme?assets.close_white:assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a href='#top' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300' onClick={closeMenu}>Home</a></li>
                    <li><a href='#about' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300' onClick={closeMenu}>About</a></li>
                    <li><a href='#services' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300' onClick={closeMenu}>Services</a></li>
                    <li><a href='#work' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300' onClick={closeMenu}>Work</a></li>
                    <li><a href='#contact' className='font-bold hover:text-turquoise dark:hover:text-orange duration-300' onClick={closeMenu}>Contact Me</a></li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar