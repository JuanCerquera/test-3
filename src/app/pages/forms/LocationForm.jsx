import { redirect } from "react-router-dom";
import {
  FormSection,
  FormSubmitButton,
} from "/src/app/components/custom/form/FormComponents";
import { FormInput, FormSwitch } from "/src/app/components/custom/form/FormFields";
import FormImage from "/src/app/components/custom/form/FormImage";
import { createInstance } from "/src/app/utilities/submitters";
import { seekRoute } from "/src/routes/config.js";
import ConsciousForm from "/src/app/components/custom/form/ConsciousForm";
import { useState } from "react";
import useItem from "/src/app/hooks/useItem.jsx";

export async function action({ request }) {
  await createInstance({ request, modelName: "locations" });
  return redirect(seekRoute("settings"));
}

export default function LocationForm() {
  const location = useItem();
  const [isVirtual, setIsVirtual] = useState(
    location ? location.is_virtual : false
  );

  return (
    <ConsciousForm method="POST" encType="multipart/form-data">
      <FormSwitch
        name="is_virtual"
        label="Virtual"
        checked={isVirtual}
        onCheckedChange={(checked) => setIsVirtual(checked)}
      />

      <FormSection title="Datos de la sede">
        <FormInput name="name" label="Nombre" required />
        {isVirtual ? null : <FormInput name="address" label="Dirección" required />}
        <FormInput name="phone" label="Teléfono" />
      </FormSection>

      <FormSection title="Imagen" columns={1}>
        <FormImage name="picture" />
      </FormSection>

      <FormSubmitButton />
    </ConsciousForm>
  );
}
