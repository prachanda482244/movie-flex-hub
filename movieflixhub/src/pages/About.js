import React from 'react'
import Profile from '../assets/profile.jpg'
const About = () => {
    return (
        <div className='flex sm:flex-col md:flex-row justify-center py-10 px-10'>
            <div className="img ">
                <img src={Profile} alt="Profile" className='p-5 rounded-full md:h-[70vh] md:w-[70vw] object-cover object-center' />
            </div>
            <div className="contain flex flex-col items-start text-left pl-12 md:w-10/12">
                <h2 className=' sm:text-4xl text-3xl mb-4 font-medium'>Hi ! My name is
                    <br className='hidden lg:inline-block' />
                    <span className='text-blue-700 font-bold'>Prachanda Rana</span>
                </h2>
                <p className='mb-8 leading-relaxed text-xl'>As a self-taught frontend developer with 1.5 years of hands-on experience. I'm embarking on this project to supercharge my ReactJS skills. My goal is to delve into advanced concepts, refine my coding abilities, and create engaging user interfaces. This project represents my commitment to continuous learning and growth in the world of frontend development.</p>
                <a
                    rel="noreferrer"
                    target='_blank'
                    href='https://prachandarana.com.np/'
                    className='bg-blue-600 hover:bg-indigo-600 py-2 px-6 border-none rounded-lg'>View Portfolio site</a>
            </div>

        </div>
    )
}

export default About
