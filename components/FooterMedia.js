import Svg from "./Svg";
import IconLink from "./IconLink";
export default function FooterMedia() {
  return (
    <div className="flex flex-row gap-5">
      <IconLink svgID="github" href="https://github.com/delaramfarzad9" />
      <IconLink
        svgID="linkedin"
        href="www.linkedin.com/in/delaram-farzad-7191ab177"
      />
    </div>
  );
}
