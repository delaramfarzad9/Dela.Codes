
import Svg from './Svg';

export default function FooterContact() {
  return (
    <div className='flex flex-row-reverse'>
        
        <a className='flex flex-row gap-3 text-base justify-center items-center dark:text-white hover:text-sky-500 dark:hover:text-pink-600' href="mailto:delaramfarzad9@gmail.com">
            <span>Contact Me</span>
            <Svg svgId="email"  className="w-8 h-8 sm:w-6 sm:h-6"/>
        </a>
    </div>
  )
}
