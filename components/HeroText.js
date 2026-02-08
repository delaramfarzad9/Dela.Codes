import React from 'react'
import AnimatedLine from '../components/AnimatedLine'

export default function HeroText({name,title1,title2}) {
  
  return (
    <div data-aos="fade-right" data-aos-duration="1500" >
        <h1 className=' mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-400 font-semibold '>Hello , My Name Is<span  className='font-bold text-sky-500 ml-2'>{name} </span>
  </h1>
  <h2 className='font-black text-3xl  md:text-5xl lg:text-7xl  tracking-wide text-mainTxt dark:text-mainTxt-dark mt-6 sm:mt-8 font-spartan '>{title1}</h2>
   
    <h2 className='block text-3xl md:text-5xl lg:text-7xl mt-5 font-black tracking-wide text-mainTxt dark:text-mainTxt-dark  font-spartan'>{title2}</h2>
    {/* description */} {/* Typed.js animation */}
  
     <div className=" md:inline-block sm:text-sm  lg:text-xl xl:text-2xl mt-6 sm:mt-8  leading-relaxed tracking-widest font-AlanSans "><AnimatedLine /></div>
     
    </div>
    
  )
}
