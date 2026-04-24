import Link from "next/link";
export default function NavLink({ href, children, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition-all duration-200 ${
        active
          ? "text-pink-500 cursor-default font-bold underline decoration-pink-500 decoration-2 underline-offset-4"
          : "text-mainTxt dark:text-mainTxt-dark hover:text-sky-500 dark:hover:text-sky-400 active:text-sky-500 dark:active:text-sky-400 hover:underline active:underline hover:decoration-sky-500 dark:hover:decoration-sky-400 active:decoration-sky-500 hover:decoration-2 active:decoration-2 hover:underline-offset-4 active:underline-offset-4"
      }`}
    >
      {children}
    </Link>
  );
}
