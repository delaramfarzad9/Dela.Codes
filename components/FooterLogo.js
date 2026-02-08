
import SmallLogo from './SmallLogo'


export default function FooterLogo({name,title}) {
  return (
    <div className='flex flex-row-reverse -ml-5 md:ml-0 gap-1 md:gap-2 items-center justify-center '>
<div className='flex flex-col items-start justify-center'>
            <span className="text-lg  font-bold">{name}</span>
<span className="text-base text-gray-500 dark:text-gray-400">{title}</span>
</div>
<div>
<SmallLogo className=""/>
  
</div>
    </div>
  )
}
