import {
  FormSection,
  FormSubmitButton,
} from "/src/app/components/custom/form/FormComponents.jsx";
import {
  FormInput,
  FormMultipleCheckbox,
  Select,
  TextArea,
} from "/src/app/components/custom/form/FormFields.jsx";
import FormImage from "/src/app/components/custom/form/FormImage";
import ConsciousForm from "/src/app/components/custom/form/ConsciousForm";
import { useContext } from "react";
import { SettingsContext } from "/src/app/utilities/contexts.jsx";

export default function ProfessionalForm() {
  const { services, locations } = useContext(SettingsContext);
  return (
    <ConsciousForm method="POST" encType="multipart/form-data">
      <FormSection title="Datos del profesional" columns={1}>
        <FormInput name="name" label="Nombre" required />
        <TextArea name="description" label="Descripción" rows={5}/>
        <FormImage name="picture" label="Foto"/>
        <Select name="location" label="Sede" options={locations}/>
        <FormMultipleCheckbox
          name="services"
          label="Servicios"
          options={services}
        />
      </FormSection>
      <FormSubmitButton />
    </ConsciousForm>
  );
}
