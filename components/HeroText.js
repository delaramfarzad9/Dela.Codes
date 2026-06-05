import React from 'react'
import AnimatedLine from '../components/AnimatedLine'
import { motion } from "framer-motion";

export default function HeroText({name,title1,title2}) {
  
  return (
   <motion.div initial="hidden"
   animate="visible"
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} >
       <motion.h1 
       variants={{ hidden: { opacity: 0, x: -40 }, 
       visible: { opacity: 1, x: 0 } }} 
       transition={{ duration: 0.6, ease: "easeOut" }}
        className='mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-400 font-semibold' > Hello, I'm <span className='font-bold text-sky-500 ml-2'>{name}</span>
         </motion.h1>
          <motion.h2 
          variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
           transition={{ duration: 0.6, ease: "easeOut" }} className='font-black text-3xl md:text-5xl lg:text-7xl tracking-wide text-mainTxt dark:text-mainTxt-dark mt-6 sm:mt-8 font-spartan landscape-hero-title' > {title1} </motion.h2>
            <motion.h2
             variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
               className='block text-3xl md:text-5xl lg:text-7xl mt-5 font-black tracking-wide font-spartan landscape-hero-title bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent' > {title2} </motion.h2>
                <motion.div
                 variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }} 
                 transition={{ duration: 0.6, ease: "easeOut" }} className="md:inline-block sm:text-sm lg:text-xl xl:text-2xl mt-6 sm:mt-8 leading-relaxed tracking-widest font-AlanSans" > <AnimatedLine />
                  </motion.div> 
                  </motion.div>
    
  )
}
