import { Form, redirect } from "react-router-dom";
import { FormInput } from "/src/app/components/custom/form/FormFields";
import { FormSection, FormSubmitButton } from "/src/app/components/custom/form/FormComponents";
import { executeAxios } from "/src/app/utilities/submitters";

export async function action({ request }) {
  const formData = await request.formData();
  const response = await executeAxios({
    method: "put",
    url: "/change_password/",
    data: formData,
  });

  console.log("OK");
  return redirect("/profile");
}

export default function ChangePasswordForm() {
  return (
    <Form
      method="POST"
      action="change-password"
      encType={"multipart/form-data"}
    >
      <FormSection title={"Cambio de contraseña"}>
        <FormInput label={"Contraseña actual"} name="old_password" />
        <FormInput label={"Nueva contraseña"} name="new_password" />
      </FormSection>
      <FormSubmitButton>
        Cambiar contraseña
      </FormSubmitButton>
    </Form>
  );
}
