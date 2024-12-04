import { useContext } from "react";
import Card from "./Card";
import { FaRegCheckCircle } from "react-icons/fa";
import { ProfileContext, SettingsContext } from "/src/app/utilities/contexts";
import { PrimaryButton } from "/src/app/components/custom/misc/Buttons";
import { Progress } from "/src/app/components/ui/progress";
import { seekRoute } from "/src/routes/config";

export default function ProfileNextStep({className}) {
  const profile = useContext(ProfileContext);
  const settings = useContext(SettingsContext);

  const {pendingModel, readySteps, isComplete} = getNextStepInfo(settings);

  return (
    !isComplete ? (
      <Card className={className}>
        <StepPending pendingModel={pendingModel} readySteps={readySteps}/>
      </Card>
    ) : (
      <></>
    )
  );
}

function StepsComplete() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-3 text-primary">
      <FaRegCheckCircle size={70}/>
      <h2 className="text-xl">¡Muy bien!</h2>
      <p className="text-black">Ya tienes todo listo para recibir citas</p>
      <PrimaryButton to={seekRoute("appointmentList")}>Ver agenda</PrimaryButton>
    </div>
  );
}

function StepPending({pendingModel, readySteps}) {
  const targets = {
    locations: seekRoute("settings", "newLocation"),
    professionals: seekRoute("settings", "newProfessional"),
    services: seekRoute("settings", "newService"),
  };
  const modelNames = {
    locations: "sede",
    professionals: "profesional",
    services: "servicio",
  };

  return (
    <div className="flex flex-col h-full justify-center items-center gap-4">
      <h2 className="text-2xl text-primary font-medium">
        ¡Pronto podrás recibir citas!
      </h2>
      <h3 className="text-lg text-primary">Completado {readySteps} de 3</h3>
      <Progress value={(readySteps / 3) * 100} className="w-3/5"/>
      <h3>Tu siguiente paso:</h3>
      <PrimaryButton to={targets[pendingModel]}>
        Crear {modelNames[pendingModel]}
      </PrimaryButton>
    </div>
  );
}

function getNextStepInfo(settings) {
  let readySteps = 0,
    pendingModel;

  for (let model in settings) {
    let instances = settings[model];
    if (instances.length === 0) {
      pendingModel = model;
      break;
    }

    readySteps++;
  }

  let isComplete = readySteps === 3;

  return {readySteps, pendingModel, isComplete};
}
