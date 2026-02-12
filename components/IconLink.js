
import Svg from './Svg'

export default function IconLink({svgID,href,className}) {
  return (
   <a href={href}  target="_blank">
     <Svg svgId={svgID} className={`w-12 h-12 text-black dark:text-white hover:text-sky-500 dark:hover:text-pink-600  ${className}`}/>
   </a>
  )
}
