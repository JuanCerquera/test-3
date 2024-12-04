import CreateItem from "/src/app/components/custom/misc/CreateItem";
import ServiceForm from "/src/app/pages/forms/ServiceForm";
import { executeAxios, processServiceForm } from "/src/app/utilities/submitters.js";
import { computeActionResponse } from "/src/app/utilities/helpers";

export async function action({ request }) {
  const formData = await processServiceForm(request);
  const response = await executeAxios({
    method: "post",
    url: '/services/',
    data: formData,
  });

  return computeActionResponse(response, "Servicio creado exitosamente");
}

export default function CreateService() {
  return <CreateItem itemName="Servicio" Form={ServiceForm} />;
}
