import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedLine() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Blending design and code.",
        "Where aesthetics meet function.",
        "Building interfaces that feel right.",
      ],
      typeSpeed: 60,
      showCursor: true,
      cursorChar: "|",
      loop: true,
      loopCount: Infinity,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 400,
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
