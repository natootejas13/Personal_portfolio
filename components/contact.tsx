'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import assets from '../assets/assets'

const Contact = ({darkTheme}) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "61c00630-634c-44b1-9866-0de0386a8cb1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div>
                <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/images/footer-bg-color.png")]'>
                    <h2 className='text-center mb-2 text-5xl'>Get in Touch</h2>
                    <p className='text-center max-w-2xl mx-auto mt-5 mb-10'>Please fill out the form to get in touch.</p>
                    <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-16'>
                    </div>
                    <form onSubmit={onSubmit}className='max-w-2xl mx-auto'>
                        <div className='grid gridtemplatecols gap-5 mt-10 mb-8'>
                            <input type='text' placeholder='Name' required className='flex-1 p-3 outline-none border-[1px] border-black dark:border-off-white rounded-md  bg-off-white dark:bg-grey' name='name' />
                            <input type='email' placeholder='E-mail id' required className='flex-1 p-3 outline-none border-[1px] border-black dark:border-off-white rounded-md bg-off-white dark:bg-grey' name='email' />
                        </div>
                        <textarea rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[1px] border-black dark:border-off-white rounded-md bg-off-white dark:bg-grey mb-6' name='message'></textarea>
                        <button type='submit' className='py-3 px-7 w-max flex items-center justify-between gap-2 border-[1px] border-black dark:border-off-white bg-transparent text-black  dark:text-off-white rounded-full mx-auto hover:font-bold hover:translate-y-0.5 duration-350'>Submit <Image src={darkTheme?assets.right_arrow_white:assets.right_arrow_dark} alt='' className='w-4' /></button>

                        <p className='mt-4'>{result}</p>
                    </form>
                </div>




            </div>
        </>

    )
}

export default Contact
