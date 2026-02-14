
import Svg from "../components/Svg";
import IconLink from "../components/IconLink";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = ({ theme }) => {
  const [submittedQuery, setSubmittedQuery] = useState(null);
  useEffect(() => {
  if (typeof window !== "undefined") {
    const query = new URLSearchParams(window.location.search).get("submitted");
    setSubmittedQuery(query);
  }
}, []);

      const [showMessage, setShowMessage] = useState(false);
       useEffect(() => { 
        if (submittedQuery === "true") { 
            setShowMessage(true);
         } },
          [submittedQuery]
        );
const titleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 }
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

  return (
    <motion.section 
    initial="hidden" 
    whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    id="contact" className="max-w-screen  md:h-screen flex justify-center items-center relative z-10 mx-6 md:mx-20 mb-10 md:mb-0  ">
      <motion.div
      initial="hidden"
       whileInView="visible" 
       viewport={{ once: true, amount: 0.2 }} 
       transition={{ staggerChildren: 0.2 }}
       className="flex flex-col  md:flex-row gap-10 md:20 xl:gap-48   ">
        {/* title & links side  */}
        <div
       
          className="flex flex-col   mt-30 md:mt-0 text-mainTxt dark:text-mainTxt-dark lg:min-w-fit   ">
          {/* title & subtitle */}
          <div className="flex flex-col  gap-5">
            <motion.h1 
           variants={titleVariants} 
           transition={{ duration: 0.7, ease: "easeOut" }}
             className="text-3xl xl:text-4xl font-black ">Let's work together</motion.h1>
            <motion.p 
            variants={leftVariants}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className=" xl:text-lg ">
              Feel free to reach out for collaborations or opportunities.
            </motion.p>
           
          </div>
          {/* links & location */}
           <div className="flex flex-col gap-4 mt-10">
          {/* links  */}
             <motion.div
              variants={leftVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-row  gap-5">
                 <IconLink
                svgID="github"
                href="https://github.com/delaramfarzad9"
                className="xl:w-20 xl:h-20  w-10 h-10 md:w-14 md:h-14 "
              />
              <IconLink
                svgID="linkedin"
                href="https://www.linkedin.com/in/delaram-farzad-7191ab177?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="xl:w-20 xl:h-20  w-10 h-10 md:w-14 md:h-14"
              />
              <IconLink svgID="email" href="mailto:delaramfarzad9@gmail.com" className="xl:w-20 xl:h-20  w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
             </motion.div>
                 {/* location  */}
             <motion.div 
             variants={leftVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
             className="flex flex-row items-center gap-2 opacity-80">
              <Svg
                svgId="location"
                className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white  "
              />
              <span className="">Leamington Spa, UK</span>
            </motion.div>
            </div>
        </div>
        {/* form side  */}
        <motion.div
        variants={rightVariants}
         transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-mainTxt dark:text-mainTxt-dark w-full lg:min-w-md lg:w-full">
          <form
            action="https://formsubmit.co/delaramfarzad9@gmail.com"
            method="POST"
            className="flex flex-col gap-5 dark:bg-[#1F2937] bg-[#E5E7EB] p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded-md border border-gray-700  focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded-md border border-gray-700   focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="px-4 py-2 rounded-md border border-gray-700   focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            {/* hidden inputs  */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contact?submitted=true"

            />

           <div className="flex justify-center">
  <button
    type="submit"
    className="px-10 py-4 rounded-md bg-linear-to-r from-pink-600 to-orange-400 
               text-white font-semibold shadow-md 
               hover:scale-105 hover:shadow-lg transition duration-300 ease-out"
  >
    Send
  </button>
</div>

            {/* success message */}
            {showMessage && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
          </form>
        </motion.div>

        {/* form side finishes */}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
