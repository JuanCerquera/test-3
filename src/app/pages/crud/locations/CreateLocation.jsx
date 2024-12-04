import LocationForm from "/src/app/pages/forms/LocationForm";
import CreateItem from "/src/app/components/custom/misc/CreateItem";
import { createInstance } from "/src/app/utilities/submitters";
import { toast } from "react-toastify";
import { seekRoute } from "/src/routes/config";
import { redirect } from "react-router-dom";
import { computeActionResponse } from "/src/app/utilities/helpers";

export async function action({ request }) {
  const response = await createInstance({ request, modelName: "locations" });
  console.log(response);
  return computeActionResponse(response, "Sede creada correctamente")
}

export default function CreateLocation() {
  return <CreateItem itemName="Sede" Form={LocationForm} />;
}
