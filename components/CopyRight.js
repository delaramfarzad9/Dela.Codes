export default function CopyRight() {
  const year = new Date().getFullYear();
  return (
    <div className=" py-4 text-center">
      <p className="text-xs font-spartan opacity-60">
        © {year}{" "}
        <a
          href="/"
          className="hover:text-sky-500 active:text-sky-500 dark:hover:text-sky-400 dark:active:text-sky-400 transition-colors duration-200"
        >
          Delaram Farzad
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}
