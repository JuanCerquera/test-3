import { useFetchAdditionalQuestions } from "/src/app/hooks/scheduleHooks";
import { FormInput, TextArea } from "/src/app/components/custom/form/FormFields";

export default function AdditionalInfoForm({ serviceId }) {
  return (
    <div className="schedule-section-card">
      <h2 className="subtitle">Información adicional</h2>
      <Remarks />
      {/*<AdditionalQuestions serviceId={serviceId} /> */}
    </div>
  );
}

function Remarks() {
  return (
    <div className="flex flex-col">
      <TextArea
        label="Observaciones"
        className="resize-none"
        name="observations"
        cols="30"
        rows="10"
        placeholder="Observaciones adicionales"
      />
    </div>
  );
}

function AdditionalQuestions({ serviceId }) {
  const additionalQuestions = useFetchAdditionalQuestions(serviceId);

  return (
    <div className="flex flex-col gap-1">
      {additionalQuestions.map((question) => (
        <FormInput
          key={question.id}
          label={question.text}
          name={"additional-question-" + question.id}
          id={"additional-question-" + question.id}
          placeholder="Respuesta"
        />
      ))}
    </div>
  );
}
