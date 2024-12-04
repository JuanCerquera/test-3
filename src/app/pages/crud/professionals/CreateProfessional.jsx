import ProfessionalForm from "/src/app/pages/forms/ProfessionalForm";
import CreateItem from "/src/app/components/custom/misc/CreateItem";
import { executeAxios } from "/src/app/utilities/submitters";
import { redirect } from "react-router-dom";
import { seekRoute } from "/src/routes/config";
import { toast } from "react-toastify";
import { computeActionResponse } from "/src/app/utilities/helpers";

export async function action({ request }) {
  const formData = await request.formData();
  const services = formData.getAll("services");
  formData.delete("services");
  formData.append("services", JSON.stringify(services));

  const response = await executeAxios({
    method: "post",
    url: "/professionals/",
    data: formData,
  });

  return computeActionResponse(response, "Profesional creado correctamente")
}

export default function CreateProfessional() {
  return <CreateItem itemName="Profesional" Form={ProfessionalForm} />;
}
