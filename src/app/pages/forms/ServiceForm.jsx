import {
  FormSection,
  FormSubmitButton,
} from "/src/app/components/custom/form/FormComponents.jsx";

import {
  FormInput,
  FormSwitch,
  FormPrice,
  FormDuration,
  RichTextArea,
} from "/src/app/components/custom/form/FormFields.jsx";

import TimeFrameCard from "/src/app/components/custom/cards/TimeFrameCard";
import FormAdditionalQuestions from "/src/app/components/custom/form/FormAdditionalQuestions";
import ConsciousForm from "/src/app/components/custom/form/ConsciousForm";

export default function ServiceForm() {
  return (
    <ConsciousForm method="POST" encType="multipart/form-data">
      <ServiceSection/>
      {/*
      <FormSection title="Preguntas adicionales" columns={1}>
        <FormAdditionalQuestions />
      </FormSection>
      */}
      <TimeframesSection/>

      <FormSubmitButton/>
    </ConsciousForm>
  );
}

function ServiceSection() {
  return (
    <FormSection title="Datos del servicio">
      <FormInput name="name" label="Nombre" required/>
      <FormPrice name="price" label="Precio" required/>
      <div className="md:col-span-2">
        <RichTextArea
          name="description"
          label="Descripción"
          className="col-span-2"
        />
      </div>
      <FormDuration name="duration" label="Duración"/>
      <FormDuration
        name="time_between_appointments"
        label="Tiempo entre citas"
      />
    </FormSection>
  );
}

function TimeframesSection() {
  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  return (
    <FormSection title="Horarios" columns={2} gapY={5}>
      {days.map((day, i) => (
        <TimeFrameCard day={day} key={i} index={i}/>
      ))}
    </FormSection>
  );
}
