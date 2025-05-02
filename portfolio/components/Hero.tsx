"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import ShimmerButton from './ui/shimmerButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            {/*spotlight*/}
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw] ' fill= "purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
        {/*grid container*/}
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0"/>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        
        {/*text container*/}
        <div className=' flex justify-center relative my-20'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Daniel&apos;s Portfolio
                </h2>
                {/*text appearing effect*/}
                <TextGenerateEffect
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words = "Hi I&apos;m Daniel"
                />

                <p className="text-center md:tracking-wider mb-4 text-small md:text-lg lg:text-2xl">
                    A Computer Science Major at Simon Fraser University
                </p>
                <a href="#projects">
                <ShimmerButton title="View My Work" 
                icon={<FaLocationArrow />} 
                position="right" 
                otherClasses=''/>
                </a>

            </div>
        </div>

    
    </div>
  )
}

export default Hero