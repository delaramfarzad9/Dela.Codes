import Svg from "./Svg";
import IconLink from "./IconLink";
export default function FooterMedia() {
  return (
    <div className="flex flex-row gap-5">
      <IconLink svgID="github" href="https://github.com/delaramfarzad9" />
      <IconLink
        svgID="linkedin"
        href="https://www.linkedin.com/in/delaram-farzad-7191ab177?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      />
    </div>
  );
}
