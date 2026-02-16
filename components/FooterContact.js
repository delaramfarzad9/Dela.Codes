
import Svg from './Svg';
import Link from 'next/link';

export default function FooterContact() {
  return (
    
        
        <Link  className='inline-flex flex-row gap-2 text-base justify-center items-center dark:text-white hover:text-sky-500 dark:hover:text-pink-600
        whitespace-nowrap' href="/contact">
            <span>Contact Me</span>
            <Svg svgId="email"  className="md:w-8 md:h-8 w-6 h-6"/>
        </Link>
    
  )
}
