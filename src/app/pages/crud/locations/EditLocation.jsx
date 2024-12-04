import EditItem, { itemAction } from "/src/app/components/custom/misc/EditItem";
import useGetItemByModel from "/src/app/hooks/useGetItemByModel";
import LocationForm from "/src/app/pages/forms/LocationForm";
import { seekRoute } from "/src/routes/config";
import { computeActionResponse } from "/src/app/utilities/helpers";
import { deleteInstance, editInstance } from "/src/app/utilities/submitters";
import { json, redirect } from "react-router-dom";
import { toast } from "react-toastify";

const modelName = "locations";

export async function action({ request, params }) {
  const response = await itemAction({ request, params, modelName });
  return computeActionResponse(response, "Sede editada correctamente")
}

export default function EditLocation() {
  const location = useGetItemByModel("locations");
  return <EditItem itemName="Sede" item={location} Form={LocationForm} />;
}
