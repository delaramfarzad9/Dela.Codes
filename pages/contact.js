import Svg from "../components/Svg";
import IconLink from "../components/IconLink";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = ({ theme }) => {
  const [submittedQuery, setSubmittedQuery] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = new URLSearchParams(window.location.search).get(
        "submitted",
      );
      setSubmittedQuery(query);
    }
  }, []);

  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    if (submittedQuery === "true") {
      setShowMessage(true);
    }
  }, [submittedQuery]);
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  );
  useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  const titleVariants = {
    hidden: { opacity: 0, y: isLargeScreen ? -40 : -20 },
    visible: { opacity: 1, y: 0 },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: isLargeScreen ? -40 : -20 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: isLargeScreen ? 40 : 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      id="contact"
      className=" mx-auto  min-h-screen
 flex justify-center items-center relative z-10 md:mx-20 mb-10 md:mb-0 landscape-padding "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col  md:flex-row gap-10 md:20 xl:gap-48 px-6 md:px-10  "
      >
        {/* title & links side  */}
        <div className="flex flex-col self-center mt-30 md:mt-0 text-mainTxt dark:text-mainTxt-dark lg:min-w-fit">
          {/* title & subtitle */}
          <div className="flex flex-col gap-5">
            <motion.h1
              variants={titleVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl xl:text-4xl font-black"
            >
              Let&apos;s work{" "}
              <span className="bg-linear-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
                together
              </span>
            </motion.h1>
            <motion.p
              variants={leftVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="xl:text-lg"
            >
              Feel free to reach out for collaborations or opportunities.
            </motion.p>
            {/* Direct email */}
            <motion.a
              variants={leftVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              href="mailto:delaramfarzad9@gmail.com"
              className="w-fit text-sm font-semibold bg-linear-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent
                bg-size-[200%_auto] hover:bg-position-[right_center]
                transition-[background-position] duration-500 ease-out"
            >
              delaramfarzad9@gmail.com
            </motion.a>
          </div>
          {/* links & location */}
          <div className="flex flex-col gap-4 mt-10">
            {/* links  */}
            <motion.div
              variants={leftVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-row  gap-5"
            >
              <IconLink
                svgID="github"
                href="https://github.com/delaramfarzad9"
                className="w-10 h-10 md:w-12 md:h-12 xl:w-13 xl:h-13 transition-transform duration-200 hover:scale-110"
              />
              <IconLink
                svgID="linkedin"
                href="www.linkedin.com/in/delaram-farzad-7191ab177"
                className="w-10 h-10 md:w-12 md:h-12 xl:w-13 xl:h-13 transition-transform duration-200 hover:scale-110"
              />
              <IconLink
                svgID="email"
                href="mailto:delaramfarzad9@gmail.com"
                className="w-10 h-10 md:w-12 md:h-12 xl:w-13 xl:h-13 transition-transform duration-200 hover:scale-110"
              />
            </motion.div>
            {/* location  */}
            <motion.div
              variants={leftVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-row items-center gap-2 opacity-60"
            >
              <Svg
                svgId="location"
                className="w-5 h-5 dark:text-white shrink-0"
              />
              <span className="text-sm">Leamington Spa, UK</span>
            </motion.div>
          </div>
        </div>
        {/* form side  */}
        <motion.div
          variants={rightVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-mainTxt dark:text-mainTxt-dark w-full lg:min-w-md lg:w-full px-4 md:px-0"
        >
          {/* Success banner */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-500 rounded-xl px-4 py-3 mb-5 text-sm font-semibold"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Message sent! I&apos;ll get back to you soon.
            </motion.div>
          )}

          <form
            action="https://formsubmit.co/delaramfarzad9@gmail.com"
            method="POST"
            className="flex flex-col gap-5 bg-white/30 dark:bg-white/5 backdrop-blur-sm border border-white/50 dark:border-white/10 rounded-2xl p-6 md:p-10 shadow-xl"
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-name"
                className="text-xs font-bold uppercase tracking-widest opacity-50"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-700/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200 placeholder:opacity-40"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-email"
                className="text-xs font-bold uppercase tracking-widest opacity-50"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-700/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200 placeholder:opacity-40"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-message"
                className="text-xs font-bold uppercase tracking-widest opacity-50"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What's on your mind?"
                rows="5"
                required
                className="px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-700/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200 placeholder:opacity-40 resize-none"
              />
            </div>

            {/* hidden inputs  */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://next-personal-app-seven.vercel.app/contact?submitted=true"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-pink-600 to-orange-400 shadow-md hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* form side finishes */}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
