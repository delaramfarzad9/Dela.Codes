
export default function CopyRight() {
  const year = new Date().getFullYear();
  return (
    <div className="md:py-3 py-6 text-center">
  <p className="text-xs  font-spartan">
     © {year}{" "}
    <a href="/" className="self-center underline hover:text-sky-500 dark:hover:text-pink-600 transition">
      Delaram Farzad
    </a>
    . All rights reserved.
  </p>
</div>

  )
}
