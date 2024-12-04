import useProfile from "/src/app/hooks/useProfile";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useContext } from "react";
import { ColorsContext } from "/src/app/utilities/contexts";

export default function SocialMedia() {
  const profile = useProfile();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <SocialMediaItem url={profile.social_facebook_url} Icon={MdFacebook} />
      <SocialMediaItem url={profile.social_instagram_url} Icon={FaInstagram} />
      <SocialMediaItem url={profile.social_web_url} Icon={TbWorld} />
    </div>
  );
}

function SocialMediaItem({ url, Icon }) {
  const { color2 } = useContext(ColorsContext);
  return (
    <a
      href={url}
      target="_blank"
      className="rounded-full text-white p-1 hover:scale-105 duration-150 flex justify-center items-center"
      style={{ backgroundColor: color2 }}
    >
      <Icon size={30} />
    </a>
  );
}
