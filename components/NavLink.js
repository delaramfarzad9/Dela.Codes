import Link from 'next/link'
export default function NavLink({ href, children, active }) {
  return (
  <Link
      href={href}
      className={` ${
        active
          ? "text-pink-500 cursor-default font-bold"
          : "hover:text-sky-500 dark:hover:text-sky-400 text-mainTxt dark:text-mainTxt-dark transition-all hover:scale-110"
      }`}
    >
      {children}
    </Link>
  )
}


