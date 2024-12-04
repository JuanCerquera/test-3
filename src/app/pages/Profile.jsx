import useSetTitle from "/src/app/hooks/useSetTitle";
import ProfileCard from "/src/app/components/custom/cards/ProfileCard";
import ProfileForm from "./forms/ProfileForm";
import ChangePasswordForm from "./forms/ChangePasswordForm";
import Logout from "/src/app/components/custom/auth/Logout";

export default function Profile() {
  useSetTitle("Perfil");

  return (
    <div>
      <ProfileCard className="mb-8" />
      <ProfileForm />
      <hr className="m-6" />
      <ChangePasswordForm />
      <div className="flex justify-center items-end border-t-2 mt-4 pt-4 md:hidden">
        <Logout />
      </div>
    </div>
  );
}
