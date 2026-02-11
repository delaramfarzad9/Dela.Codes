
import Svg from "../components/Svg";
import IconLink from "../components/IconLink";
import { useState, useEffect } from "react";

const Contact = ({ theme }) => {
  const [submittedQuery, setSubmittedQuery] = useState(null);
   useEffect(() => { 
    const query = new URLSearchParams(window.location.search).get("submitted");
     setSubmittedQuery(query); }, []);
      const [showMessage, setShowMessage] = useState(false);
       useEffect(() => { 
        if (submittedQuery === "true") { 
            setShowMessage(true);
         } },
          [submittedQuery]
        );
  return (
    <section id="contact" className="h-screen flex justify-center items-center relative z-10 mx-20 ">
      <div className="flex flex-row gap-48  justify-center items-start">
        {/* title & links side  */}
        <div className="flex flex-col  text-mainTxt dark:text-mainTxt-dark lg:min-w-fit">
          {/* title & subtitle */}
          <div className="flex flex-col  gap-5">
            <h1 className="text-4xl font-black">Let's work together</h1>
            <p className="text-lg ">
              Feel free to reach out for collaborations or opportunities.
            </p>
           
          </div>
          {/* links & location */}
           <div className="flex flex-col gap-4 mt-10">
          {/* links  */}
             <div className="flex flex-row gap-5">
                 <IconLink
                svgID="github"
                href="https://github.com/delaramfarzad9"
                className="w-20 h-20 "
              />
              <IconLink
                svgID="linkedin"
                href="https://www.linkedin.com/in/delaram-farzad-7191ab177?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-20 h-20"
              />
              <IconLink svgID="email" href="mailto:delaramfarzad9@gmail.com" className="w-20 h-20" />
             </div>
                 {/* location  */}
             <div className="flex flex-row items-center gap-2 opacity-80">
              <Svg
                svgId="location"
                className="w-8 h-8 dark:text-white  "
              />
              <span className="">Leamington Spa, UK</span>
            </div>
            </div>
        </div>
        {/* form side  */}
        <div className="text-mainTxt dark:text-mainTxt-dark w-full lg:min-w-md lg:w-full">
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
              value="http://localhost:5174/?submitted=true"
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
        </div>

        {/* form side finishes */}
      </div>
    </section>
  );
};

export default Contact;
