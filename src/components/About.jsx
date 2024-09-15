"use client"
import React from 'react'
import Lottie from 'lottie-react'
import computer from "../app/lottie/computer.json"
import Button from './parts/Button'
const About = () => {
  return (
    <div id='about' className='py-[60px] bg-secondary rounded-l-[40px] rounded-r-[40px] mt-[40px] lg:mt-0'>
        <h2 className=' text-center text-white capitalize text-[52px] font-semibold'>about <span className='text-primary'>me</span> </h2>
        <div className="max-w-[1240px] flex flex-col lg:flex-row items-center mx-auto mt-[30px]">
            <div className=" w-[100%] lg:w-[50%]">
                <div className=" w-[350px] lg:w-[500px] mx-auto">
                <Lottie animationData={computer} />
                </div>
            </div>
            <div className=" w-[100%] lg:w-[50%] flex flex-col gap-3 p-[40px]">
                <p className='text-primary text-[22px] capitalize '>front end developer</p>
                <p className='text-[42px] font-semibold text-white capitalize leading-[1.2em]'>I&apos;m Shabab passionate  developer </p>
                <p className='text-white text-[17px] mb-[20px]'>Hello! I am Shabab, a seasoned FullStack Web Developer with a Computer Engineering background. Proficient in HTML5, CSS3, Bootstrap, Tailwind, Sass, JavaScript ES6, ReactJS, TypeScript, NextJS, and much more.I specialize in creating visually stunning responsive, and SEO-friendly websites and apps from custom Figma/PSD designs. Let’s turn your vision into reality. Contact me to get started!</p>
                <Button text="hire me" bg={true} />
            </div>
        </div>
    </div>
  )
}

export default About