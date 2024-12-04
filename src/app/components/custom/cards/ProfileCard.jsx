import { PrimaryButton } from "/src/app/components/custom/misc/Buttons";
import { FaLink } from "react-icons/fa";
import Card from "./Card";
import Image from "/src/app/components/custom/misc/Image";
import { useContext } from "react";
import { ProfileContext } from "/src/app/utilities/contexts";
import { seekRoute } from "/src/routes/config";
import { toDatetimeString } from "/src/app/utilities/filters.js";
import useProfile from "/src/app/hooks/useProfile";

export default function ProfileCard({ className }) {
  return (
    <Card className={className}>
      <div className="flex flex-col items-center">
        <ImagesSection />
        <InfoSection />
        <ScheduleLink />
        <NextPaymentInfo />
      </div>
    </Card>
  );
}

function ImagesSection() {
  const profile = useProfile();
  return (
    <>
      <Image
        src={profile.banner_picture}
        nameForDefault="banner"
        className="rounded-lg w-full h-32 object-cover object-center"
        alt="Foto de banner"
      />
      <div className="bg-slate-50 rounded-full p-0.5 -mt-14">
        <Image
          src={profile.profile_picture}
          nameForDefault="profile"
          className="rounded-full w-24 h-24 object-cover"
          innerShadow
          alt="Foto de perfil"
        />
      </div>
    </>
  );
}

function InfoSection() {
  const profile = useProfile();
  const createdPayment = profile.subscription?.date_created;
  if (!createdPayment) return null;
  return (
    <>
      <h2 className="m-3 font-semibold text-lg">{profile.name}</h2>
      <span>
        Activo desde{" "}
        <span className="font-semibold">
          {toDatetimeString(createdPayment, "short-date", true)}
        </span>
      </span>
    </>
  );
}

function ScheduleLink() {
  const profile = useProfile();
  const scheduleUrl = seekRoute("schedule", undefined, { slug: profile.slug });
  const fullScheduleUrl = window.location.host + scheduleUrl;
  return (
    <a
      href={scheduleUrl}
      target="__blank"
      className="text-sm text-slate-400 underline"
    >
      <FaLink className="inline m-1" />
      {fullScheduleUrl}
    </a>
  );
}

function NextPaymentInfo() {
  const profile = useProfile();
  const nextPaymentDate = profile.subscription?.next_payment_date;
  if (!nextPaymentDate) return null;
  return (
    <span className="text-gray-400 text-sm">
      Próxima renovación: {toDatetimeString(nextPaymentDate, "short-date", true)}
    </span>
  );
}