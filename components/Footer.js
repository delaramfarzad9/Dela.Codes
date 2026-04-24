import FooterLogo from "./FooterLogo";
import FooterMedia from "./FooterMedia";
import FooterContact from "./FooterContact";
import CopyRight from "./CopyRight";

export default function Footer({ theme }) {
  return (
    <footer className="relative z-10 w-full border-t border-black/10 dark:border-white/10">
      <div className="px-6 md:px-20 py-6 md:py-8 flex flex-col gap-6 md:flex-row items-center md:justify-between">
        <FooterLogo
          name="Delaram Farzad"
          title="Front-End Developer & UI Designer"
        />
        <FooterMedia />
        <FooterContact />
      </div>
      <CopyRight />
    </footer>
  );
}
