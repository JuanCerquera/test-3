import { useContext } from "react";
import Card from "./Card";
import { Progress } from "/src/app/components/ui/progress";
import FieldsChecklist, { getFields } from "/src/app/components/custom/misc/FieldsChecklist";
import { PrimaryButton } from "/src/app/components/custom/misc/Buttons";
import { ProfileContext } from "/src/app/utilities/contexts";
import { seekRoute } from "/src/routes/config";

export default function ProfileCompletenessCard({ completeness, className }) {
  const profile = useContext(ProfileContext);
  return (
    <Card className={className}>
      <div className="text-center font-medium text-primary h-fit">
        <div className="flex justify-around items-center m-2">
          <h2 className="text-lg">Tu perfil está al {completeness}%</h2>
          <PrimaryButton to={seekRoute("profile")}>
            Completa tu perfil
          </PrimaryButton>
        </div>
        <Progress value={completeness} />
        <hr className="m-3" />
        <FieldsChecklist profile={profile} />
      </div>
    </Card>
  );
}

export function getProfileCompleteness(profile) {
  const fields = getFields(profile);
  const completeFields = fields.filter(([key, value]) => {
    return Boolean(value);
  });

  const percentage = (completeFields.length / fields.length) * 100;
  return Math.round(percentage);
}
