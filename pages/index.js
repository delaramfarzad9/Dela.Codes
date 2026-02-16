"use client";
import React, { useState, useEffect } from "react";

import HeroText from "../components/HeroText";
import HeroGraphic from "../components/HeroGraphic";
import AnimatedLine from "../components/AnimatedLine";
import { motion } from "framer-motion";





export default function Herosection({ children, theme }) {
    
  return (
    <>
    <section className="relative  z-10 min-h-screen  w-full
 flex flex-col sm:justify-center landscape-padding 
">
   
 
      {children}
      {/* wrapper */}
      <div className="flex md:flex-row flex-col-reverse  max-w-screen   mx-6 md:mx-20  md:justify-between md:items-center justify-end mt-24 md:mt-0 md:mb-0 mb-10 landscape-hero">
       
       
        <HeroText name="Dela" title1="Front-End Developer" title2="UI Designer"/>
       

   <motion.div 
       animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }} className="z-30 -ml-10 md:ml-0 landscape-hero-graphic ">
      <HeroGraphic/>
   </motion.div>

</div>
     
    </section>
 
    </>
    
  );
}
    
 