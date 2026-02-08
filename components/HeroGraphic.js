import React from 'react'

import Logo from '../components/Logo'

export default function HeroGraphic({className}) {
  return (

     <div className='flex z-30 justify-center'>
 <Logo className={`w-[250px] h-[250px] md:w-[350px]  md:h-[350px]  lg:w-[450px] lg:h-[450px] ${className}`}/>
 

</div>
  )

}
