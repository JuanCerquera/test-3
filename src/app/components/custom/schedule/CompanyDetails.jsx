import useProfile from "/src/app/hooks/useProfile";
import SocialMedia from "./SocialMedia";
import Image from "/src/app/components/custom/misc/Image";
import { useContext } from "react";
import { ColorsContext } from "/src/app/utilities/contexts";

export default function CompanyDetails() {
  const profile = useProfile();
  const { color2 } = useContext(ColorsContext);
  return (
    <div
      id="sidebar"
      className="lg:sticky top-28 px-3 lg:px-7 text-center lg:max-w-sm  h-fit schedule-section-card mb-20"
    >
      <Image
        src={profile.profile_picture}
        nameForDefault="profile"
        alt="Compañía"
        className="shadow-md w-56 aspect-1 bg-white rounded-full object-cover -mt-28 mx-auto block"
      />
      <h1 className="lg:text-center mt-1">{profile.name}</h1>
      <SocialMedia />
      <a
        href={"tel:+57" + profile.phone}
        className="mt-2 rounded-md px-3 py-2 text-white block w-fit mx-auto hover:scale-105 transition-all duration-150"
        style={{ backgroundColor: color2 }}
      >
        Contactar
      </a>
      <p className="text-justify mt-3"> {profile.description}</p>
    </div>
  );
}
