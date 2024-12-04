import banner from "/src/assets/images/defaults/banner.png";
import profile from "/src/assets/images/defaults/profile.jpg";
import location from "/src/assets/images/defaults/location.png";
import professional from "/src/assets/images/defaults/profile.jpg";
import { useState } from "react";

const defaults = { banner, profile, location, professional };

export default function Image({
  type,
  nameForDefault,
  className,
  src,
  innerShadow,
  ...props
}) {
  const initSrc = src ?? "";
  const [finalSrc, setFinalSrc] = useState(initSrc);

  function onImageError() {
    console.log("Image error");
    const imageName = nameForDefault ?? "banner";
    setFinalSrc(defaults[imageName]);
  }
  
  return (
    <img
      src={finalSrc}
      className={className}
      style={
        innerShadow && { boxShadow: "inset 0 2px 4px 0 hsla(0, 0%, 0%, .2)" }
      }
      {...props}
      onError={onImageError}
    />
  );
}
