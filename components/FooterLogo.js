import SmallLogo from "./SmallLogo";

export default function FooterLogo({ name, title }) {
  return (
    <div className="flex flex-row gap-3 items-center justify-center">
      <SmallLogo className="w-14 h-14" />
      <div className="flex flex-col items-start justify-center">
        <span className="text-base font-bold font-architectsDaughter">
          {name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </span>
      </div>
    </div>
  );
}
