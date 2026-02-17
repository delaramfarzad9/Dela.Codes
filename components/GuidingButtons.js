import React from 'react'
import Link from 'next/link'

const GuidingButtons = ({task,page}) => {
  return (
<Link href={`/${page}`}>
<button
  className="
    relative lg:px-10 lg:py-4 px-5 py-2 md:px-8 md:py-3 rounded-xl font-semibold 
    backdrop-blur-xl bg-gray-100/10 
    shadow-[0_8px_20px_rgba(0,0,0,0.25)]
    overflow-hidden transition-all duration-300 ease-out
    hover:scale-105 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]
    group
  "
>
  {/* Wet glossy highlight */}
  <span
    className="
      absolute inset-0 rounded-xl
      bg-linear-to-br from-gray-100/40 to-transparent
      opacity-20 pointer-events-none
    "
  />

  {/* Your gradient appears ONLY on hover */}
  <span
    className="
      absolute inset-0 rounded-xl
      bg-linear-to-br from-pink-600 to-orange-400
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300 ease-out
    "
  />

  {/* Text stays above everything */}
  <span className="relative z-10">{task}</span>
</button>

</Link>
  )
}

export default GuidingButtons