"use client";
import React, { useState, useEffect } from "react";

import HeroText from "../components/HeroText";
import HeroGraphic from "../components/HeroGraphic";
import AnimatedLine from "../components/AnimatedLine";
import { motion } from "framer-motion";





export default function Herosection({ children, theme }) {
    
  return (
    <>
    <section className="relative  z-10  md:h-screen max-w-screen flex flex-col  ">
   
 
      {children}
      {/* wrapper */}
      <div className="flex md:flex-row flex-col-reverse  max-w-screen h-full  mx-6 md:mx-20  md:justify-between md:items-center justify-end mt-24 md:mt-0 md:mb-0 mb-10">
       
       <motion.div
       initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
       >
        <HeroText name="Dela" title1="Front-End Developer" title2="UI Designer"/>
       </motion.div>

   <div className="z-30 -ml-10 md:ml-0 ">
      <HeroGraphic className="md:animate-none animate-spin-pause-spin "/>
   </div>

</div>
     
    </section>
 
    </>
    
  );
}
    
 