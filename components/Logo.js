
export default function Logo({className}) {
  return (
    <>
       <img   src="/images/hero/MyImg.png"
      alt="Logo"  className={`dark:hidden   shrink-0 ${className}`}/>
        <img   src="/images/hero/MyImgDark.png"
      alt="Logo"  className={`hidden dark:inline-flex   shrink-0 ${className}`}/>
      
    </>
  )
}