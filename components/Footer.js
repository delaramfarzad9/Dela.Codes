import FooterLogo from './FooterLogo'
import FooterMedia from './FooterMedia'
import FooterContact from './FooterContact'
import CopyRight from './CopyRight'

export default function Footer() {
  return (
   <footer className='relative z-10 w-full border-t-2 border-black/10 dark:border-white/10 '>
    <div className='md:px-20 pt-3 flex flex-col gap-6 justify-center md:flex-row  items-center md:justify-between '>
<FooterLogo name="Delaram Farzad" title="Front-End Developer & UI Designer"/>
<FooterMedia/>
<FooterContact/>
    </div>

    <CopyRight/>
   </footer>

  )
}
