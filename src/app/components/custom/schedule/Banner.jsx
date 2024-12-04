import useProfile from "/src/app/hooks/useProfile";
import Image from "/src/app/components/custom/misc/Image";

export default function Banner() {
  const profile = useProfile();
  return (
    <div className="lg:h-[25rem] h-[43vw] w-full">
      <Image
        src={profile.banner_picture}
        nameForDefault="banner"
        className="w-full h-full object-cover object-center"
        alt="Banner"
      />
    </div>
  );
}