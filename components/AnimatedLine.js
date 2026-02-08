import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedLine() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Blending design and code"], // your phrase
      typeSpeed: 100,
      showCursor: false,
      cursorChar: "|",
      loop: true,          // 🔑 this makes it restart automatically
    loopCount: Infinity, // optional, ensures it repeats forever
     backSpeed: 80,      // speed of backspacing
    backDelay: 1500,    // pause before erasing
    });

    return () => typed.destroy(); // cleanup
  }, []);

  return (
    <div
      ref={typedElement}
      className="sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-6 leading-relaxed tracking-widest font-AlanSans h-[40px]"
    />
  );
}
